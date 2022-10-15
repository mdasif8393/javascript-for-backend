console.log(module);

export function errorHandler(error) {
    //error properties
    const { name, message, stack } = error;
    console.log(name, message)

    //store error
    // logger.error({
    //     name,
    //     message,
    //     stack
    // });

    // console.log("Internal server error");
};

function two(){
    console.log("two");
}

//default export
// module.exports = errorHandler;

//named export
// module.exports.errorHandler = errorHandler;
// module.exports.two = two;

// module.exports = {
//     errorHandler: errorHandler,
//     two: two,
// }


export default two;