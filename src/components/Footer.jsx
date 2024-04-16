// import React from 'react'
// import { Link } from 'react-router-dom'
// const Footer = () => {
//     return (
//         <footer id="picassoFooter">
//             <div className="footer-navigation">
//                 <h3>Quick Links</h3>
//                 <ul>
//                     <li>
//                         <Link to={'/'}>Home</Link>
//                     </li>
//                     <li>
//                         <Link to={'/about'}>About us</Link>

//                     </li>
//                     <li>
//                         <Link to={'/services'}>Services</Link>
//                     </li>
//                     <li>
//                         <Link to={'/contact'}>Contact us</Link>
//                     </li>
//                 </ul>
//             </div>
//             <div className="footer-contact">
//                 <h3>Contact Us</h3>
//                 <p>Email: info@example.com</p>
//                 <p>Phone: +123 456 7890</p>
//             </div>
//             <div className="footer-social">
//                 <h3>Follow Us</h3>
//                 <div className="social-icons">
//                     <a href="https://facebook.com" target="_blank" className="social-icon">
//                         FB
//                     </a>
//                     <a href="https://twitter.com" target="_blank" className="social-icon">
//                         TW
//                     </a>
//                     <a href="https://instagram.com" target="_blank" className="social-icon">
//                         IG
//                     </a>
//                 </div>
//             </div>
//             <div className="footer-art">
//                 <canvas id="picassoCanvas" />
//             </div>
//         </footer>


//     )
// }

// export default Footer
import { Heading, Stack, Link, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <Stack w={'100vw'} bgColor={'black'} color={'white'} py={'10'} px={'4'} direction={{ base: 'column', lg: 'row' }} justifyContent={{ base: 'center', lg: 'space-between' }} alignItems={'center'} >
            <VStack>
                <Heading>All Rights Reserved</Heading>
                <Text color={'yellow'} >@MNIT JAIPUR</Text>
            </VStack>

            <Stack fontSize={'50'} direction={'row'} w={{ base: 'full', lg: '50%' }} justifyContent={'space-evenly'} alignItems={'center'}>
                <a href="https://www.youtube.com" target="_blank">  < FaYoutube /></a>
                <a href="https://www.instagram.com" target="_blank">      <FaInstagram /></a>
                <a href="https://www.twitter.com" target="_blank"><FaTwitter /> </a>




            </Stack>
        </Stack >
    )
}

export default Footer