import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

interface PageInfo {
    name: string;
    path: string;
    anchorable: boolean
}

const pages = new Map<string, PageInfo>();

pages.set('portfolio', { name: "Portfolio", path: "/portfolio", anchorable: true });
pages.set('market', { name: "Market", path: "/market", anchorable: true });
pages.set('account', { name: "Account", path: "/account", anchorable: true });

const pageIcons = new Map<string, any>()
pageIcons.set("Portfolio", <AttachMoneyIcon /> )
pageIcons.set("Market", <LocalGroceryStoreOutlinedIcon /> )
pageIcons.set("Account", <AccountCircleOutlinedIcon /> )

export { pages, pageIcons } ;
