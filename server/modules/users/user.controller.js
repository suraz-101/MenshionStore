const userModel = require("./user.model");
const {
  hashThePassword,
  compareHashedPassword,
} = require("../../utils/bcrypt");
const { mailer } = require("../../services/mailer");
const { tokenGeneration } = require("../../utils/token");

const createUser = (payload) => {
  return userModel.create(payload);
};

const getAllUsers = async ({ page = 1, limit = 20, search }) => {
  console.log(search?.email, "is email sent from frontend");
  const query = [];

  if (search?.email) {
    query.push({
      $match: {
        email: new RegExp(search.email, "gi"),
      },
    });
  }

  query.push(
    {
      $project: {
        _id: 0,
      },
    },
    {
      $facet: {
        metadata: [
          {
            $count: "total",
          },
        ],
        data: [
          {
            $skip: (+page - 1) * +limit,
          },
          {
            $limit: +limit,
          },
        ],
      },
    },
    {
      $addFields: {
        total: {
          $arrayElemAt: ["$metadata.total", 0],
        },
      },
    }
  );
  const result = await userModel.aggregate(query);

  return {
    data: result[0].data,
    total: result[0].total,
    limit: +limit,
    page: +page,
  };
};

const getUserByEmail = async (email) => {
  console.log(email);
  return await userModel.findOne({ email });
};

const getUser = (_id) => {};

const updateUserDetails = (_id, payload) => {};
const deleteUser = (_id) => {};

const registerUser = async (payload) => {
  const { email, password } = payload;
  const hashedPass = await hashThePassword(password);
  payload.password = hashedPass;
  const userRegistration = await userModel.create(payload);
  if (!userRegistration) throw new Error("Registration Failed");
  await mailer(
    email,
    "Registration Success",
    "CONGRATULATIONS!! You have successfully Registered into our system"
  );
  // if (!mailStatus) throw new Error(" Email failed to send!!");
  return "Registration Successfull, CONGRATULATIONS!!";
};

const loginUser = async (payload) => {
  const { email, password } = payload;
  if (!email || !password) throw new Error("email or password is missing!!");
  const user = await userModel.findOne({ email }).select("+password");

  if (!user) throw new Error(" User does not exist. Please enter valid email");
  const { password: hashPassword } = await user;
  const passwordComparision = await compareHashedPassword(
    password,
    hashPassword
  );
  if (!passwordComparision) throw new Error("Password does not matched!!");
  const tokenPayload = { name: user.name, email: user.email, role: user.roles };
  const token = await tokenGeneration(tokenPayload);
  return token;
};

const resetPassword = async (payload) => {
  const { id, newPassword } = payload;
  if (!id || !newPassword) throw new Error("id or newPassword is missing");
  const user = await userModel.findOne({ _id: id }).select("+password");
  if (!user) throw new Error("user not found");
  const hashedNewPassword = await hashThePassword(newPassword);
  await userModel.updateOne({ _id: user.id }, { password: hashedNewPassword });
  return "password reset successfully";
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  updateUserDetails,
  deleteUser,
  loginUser,
  registerUser,
  resetPassword,
  getUserByEmail,
};
