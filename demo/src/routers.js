import AddCustomer from './components/AddCustomer'
import Customer from './components/Customer'
import CustomerDetail from './components/CustomerDetail'
import Redact from './components/Redact'

export default [
   {path:"/",component:Customer},
   {path:"/add",component:AddCustomer},
   {path:"/detail/:id",component:CustomerDetail},
   {path:"/redact/:id",component:Redact}
]
