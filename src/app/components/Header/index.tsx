
import { AppIcon } from '../AppIcon';
import Links from './Links';
import Searchbar from './Searchbar';
import './style.css';

export default function Header() {
    return (
        <header className='flex items-center p-5 pt-3 pb-3 header absolute top-0 left-0 z-20 bg-real-transparent'
            style={{
                width: 'calc(100% - 15px)'
            }}
        >
            <AppIcon />
            <Links className='hidden sm:flex ps-5 pe-5 overflow-clip text-lg gap-5 items-center justify-center grow [&_a]:text-sm lg:[&_a]:text-xl' />
            {/* <Searchbar /> */}
        </header>
    );
}
