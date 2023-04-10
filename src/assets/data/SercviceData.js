import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';

const serviceData = [
    {
        icon: <LocalShippingOutlinedIcon/>,
        title: "Free Shipping",
        subtitle: "Order $25 or more to qualify for FREE Shipping on over 100 million items.",
        bg: '#FFE5D9',
    },
    {
        icon: <AutorenewOutlinedIcon/>,
        title: "Easy Returns",
        subtitle: "You may see different return options depending on the seller, item, or reason for return.",
        bg: '#d8e2dc',
    },
    {
        icon: <CreditScoreOutlinedIcon/>,
        title: "Secure Payment",
        subtitle: "We are committed to employ payment security measures to combat fraud and private data.",
        bg: '#ffcad4',
    },
    {
        icon: <CurrencyExchangeOutlinedIcon/>,
        title: "Back Guarantee",
        subtitle: "You can request an A-z Guarantee refund if there's a problem with an item.",
        bg: '#bde0fe',
    },
]

export default serviceData;