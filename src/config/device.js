const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '550px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

const device = {
    phone: `(min-width: ${size.mobileS}) and (max-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.mobileL}) and (max-width: ${size.tablet})`,
    laptop : `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
};

export default device;
