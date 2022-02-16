import React from 'react';
import './footer.css';

function Footer() {
    return(
        <>
        < hr className='color-Hr'/>
<section className='footer-container'>
<section className='footer-info-1'>
<span>Салыкина Галина</span>
<br/>
тел 99999999999
</section>
<section className='footer-info-2'>
<span>Email</span> 
<br/>
galya1985@bk.ru
</section>
<section className='footer-info-3'>
    <a href='https://web.telegram.org/k/'><img src='./images/tg.png'/></a>
    <a href='/'><img src='./images/inst2.png'/></a>
    <a href='/'><img src='./images/vk2.png'/></a>
    <a href='/'><img src='./images/vk2.png'/></a>
</section>
</section>
</>
    )


}
export default Footer;