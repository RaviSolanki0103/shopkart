import {toast} from 'react-toastify';
toast.configure()
const Toast = (props) => {
    return (
        props.success?
         toast.success(props.msg, { autoClose: 2000 }):
         toast.error(props.msg, { autoClose: 2000 })
          );
}
 
export default Toast;