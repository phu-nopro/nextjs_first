

import { Header, Footer } from '../../common';

const Mainlayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Mainlayout;