function AccessDeniedRedirect() {
    window.location.href = 'http://localhost:3000/error';
    return null;
}

export default AccessDeniedRedirect;