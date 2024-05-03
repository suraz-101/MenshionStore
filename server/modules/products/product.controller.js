const productSchema = require("./product.model");

const createProduct = (payload) => {
  const product = productSchema.create(payload);
  console.log(product)
  // if (!product) throw new Error("Product could not upload!");
  return "product added successfully";
};

const getAllProduct = async (search, page = 1, limit = 20) => {
  const query = [];

  if (search?.product) {
    query.push({
      $match: {
        name: new RegExp(`${search?.product}`, "gi"),
      },
    });
  }

  query.push(
    {
      $lookup: {
        from: "users",
        localField: "addedBy",
        foreignField: "_id",
        as: "productUsers",
      },
    },
    {
      $unwind: {
        path: "$productUsers",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $addFields: {
        addedBy: "$productUsers.name",
      },
    },
    {
      $project: {
        _id: 0,
        name: 1,
        discount: 1,
        price: 1,
        createdAt: 1,
        updatedAt: 1,
        addedBy: 1,
        image: 1,
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
  const result = await productSchema.aggregate(query);

  return {
    data: result[0].data,
    total: result[0].total,
    limit: +limit,
    page: +page,
  };
};

const getProductById = (_id) => {};

const updateProduct = (_id, payload) => {};

const deleteProduct = (name) => {
  return productSchema.deleteOne({ name });
};

module.exports = {
  createProduct,
  getAllProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
