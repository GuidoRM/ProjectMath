/* eslint-disable react/prop-types */
const Header = ({title}) => {
    return (
        <>
            <header className="header">
                <h2 className="header__title">{title}</h2>

                <section className="header__logo">
                    <h1 className="header__logo-title">ADVANCED <br /> TECHNOLOGICAL <br /> SYSTEM</h1>
                    <img className="header__logo-image" src="/logo-system.png" alt="Logo Prisión de Hierro" />
                </section>
            </header>
        </>
    )
}

export default Header