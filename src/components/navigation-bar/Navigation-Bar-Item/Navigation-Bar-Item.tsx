import './Navigation-Bar-Item.scss'

function NavigationBarItem({children}: {children: string}) {
    return (
        <>
           <a className='navigation-bar-item'>
               {children}
           </a>
        </>
    )
}

export default NavigationBarItem