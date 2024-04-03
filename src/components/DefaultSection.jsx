import Header from "./Header"

const DefaultSection = ({children, title, className}) => {
  return (
    <main className='dafaultSection'>
        <Header title={title}/>

        <section className={className}>
            {children}
        </section>

    </main>
  )
}

export default DefaultSection