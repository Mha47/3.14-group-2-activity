module.exports.handler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Group 2 meow",
        },
        null,
        2
      ),
    };
  };