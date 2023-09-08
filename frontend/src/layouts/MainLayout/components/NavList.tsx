import { Link, useLocation } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { pages, pageIcons } from '../../../utils/pages';
import hasTouchScreen from '../../../utils/has-touchscreen';

const navLinks = Array.from(pages.values()).filter(page => page.anchorable);

const NavList = () => {
    const { pathname } = useLocation();

    return (
        /* md:justify-between needed? */
        <ul className="list-none flex items-center md:flex-col justify-evenly md:h-60">
            {navLinks.map((navLink, index) => 
                /* justify-start? */
                <li className='h-16 md:h-full max-w-navItemMobile md:max-w-full md:w-full grow flex justify-start items-center' key={index}>
                    <Link className='no-underline h-full w-full' to={navLink.path}>
                        <IconButton
                            className='h-full w-full'
                            color={pathname === navLink.path ? "primary": undefined}
                            sx={{
                                borderRadius: 0,
                                margin: 0,
                                padding: 0,
                                opacity: 0.9,
                                ":hover": {
                                    opacity: 1,
                                    backgroundColor: {
                                        md: !hasTouchScreen ? "grey.200" : undefined
                                    }
                                },
                                
                            }}
                        >
                            {pageIcons.get(navLink.name)}
                            <span className='hidden md:inline md:ml-3'>{navLink.name}</span>
                        </IconButton>
                    </Link>
                </li>
            )}
        </ul>
    )
}

export default NavList;
