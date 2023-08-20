interface PageInfo {
    name: string;
    path: string;
    anchorable: boolean
}

const pages = new Map<string, PageInfo>();

pages.set('portfolio', { name: "Portfolio", path: "/portfolio", anchorable: true });
pages.set('market', { name: "Market", path: "/market", anchorable: true });
pages.set('account', { name: "Account", path: "/account", anchorable: true });

export default pages;
