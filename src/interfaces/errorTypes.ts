enum ErrorTypes {
    load,
    parse,
}

class RejectedFile {
    constructor(readonly file: string, readonly errorType: ErrorTypes) {}
}

export default RejectedFile;

export {
    ErrorTypes
}