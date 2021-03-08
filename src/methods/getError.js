export default function getError(errors, path) {
    if (errors == null || typeof errors[path] === 'undefined') {
        return null;
    }

    return errors[path];
};
