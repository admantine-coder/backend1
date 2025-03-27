exports.successResponse = (res, message, data) => {
    res.json({ message, data });
};

exports.errorResponse = (res, message) => {
    res.status(500).json({ message });
};
