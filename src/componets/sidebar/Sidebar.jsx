
import './sidebar.css'
import SellIcon from '@mui/icons-material/Sell';
import InventoryIcon from '@mui/icons-material/Inventory';
import TimelineIcon from '@mui/icons-material/Timeline';
import SummarizeIcon from '@mui/icons-material/Summarize';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const sidebar = () => {
  return (
    <div className='sidebarr'>
        <div className='sidebarrWrapper'>
             <h2 className='logo' >Biashara Analyser</h2>
           <div className='sidebarrMenu'>
                <ul className='sidebarrList'>
                     <li className='sidebarrListItem Active'>  <SellIcon className="sideBarIcon" /> Sales</li>
                     <li className='sidebarrListItem'>  <InventoryIcon className='sideBarIcon' /> Stock</li>
                     <li className='sidebarrListItem'>  <CreditCardIcon className='sideBarIcon' /> OnCredit</li>
                     <li className='sidebarrListItem'>  <StoreIcon className='sideBarIcon' />Vendor</li>
                     <li className='sidebarrListItem'> <ShoppingCartIcon className='sideBarIcon' /> Expenses</li>
                     <li className='sidebarrListItem'> <SummarizeIcon className='sideBarIcon' /> Report</li>
                     <li className='sidebarrListItem'>   <TimelineIcon className='sideBarIcon' /> Product  Analysis</li>
                </ul>
           
           </div>
        </div> 

    </div>
  )
}

export default sidebar