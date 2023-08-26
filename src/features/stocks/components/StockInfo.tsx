type StockInfoPropsType = {
    name: string
}

const StockInfo = ({ name }: StockInfoPropsType) => {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default StockInfo;
