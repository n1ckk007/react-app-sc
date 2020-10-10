import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterStyles'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
      }

    return (
        <FooterContainer>
              <FooterWrap>
                  <FooterLinksContainer>
                      <FooterLinksWrapper>
                          <FooterLinkItems>
                              <FooterLinkTitle>About us</FooterLinkTitle>
                                  <FooterLink to='signIn'>How it works</FooterLink>
                                  <FooterLink to='signIn'>Testimonials</FooterLink>
                                  <FooterLink to='signIn'>Careers</FooterLink>
                                  <FooterLink to='signIn'>Terms of services</FooterLink>
                          </FooterLinkItems>
                          <FooterLinkItems>
                              <FooterLinkTitle>About us</FooterLinkTitle>
                                  <FooterLink to='signIn'>How it works</FooterLink>
                                  <FooterLink to='signIn'>Testimonials</FooterLink>
                                  <FooterLink to='signIn'>Careers</FooterLink>
                                  <FooterLink to='signIn'>Terms of services</FooterLink>
                          </FooterLinkItems>
                      </FooterLinksWrapper>
                      <FooterLinksWrapper>
                          <FooterLinkItems>
                              <FooterLinkTitle>About us</FooterLinkTitle>
                                  <FooterLink to='signIn'>How it works</FooterLink>
                                  <FooterLink to='signIn'>Testimonials</FooterLink>
                                  <FooterLink to='signIn'>Careers</FooterLink>
                                  <FooterLink to='signIn'>Terms of services</FooterLink>
                          </FooterLinkItems>
                          <FooterLinkItems>
                              <FooterLinkTitle>About us</FooterLinkTitle>
                                  <FooterLink to='signIn'>How it works</FooterLink>
                                  <FooterLink to='signIn'>Testimonials</FooterLink>
                                  <FooterLink to='signIn'>Careers</FooterLink>
                                  <FooterLink to='signIn'>Terms of services</FooterLink>
                          </FooterLinkItems>
                      </FooterLinksWrapper>
                  </FooterLinksContainer>
                  <SocialMedia>
                      <SocialMediaWrap>
                          <SocialLogo to='/' onClick={toggleHome}>Logo</SocialLogo>
    <WebsiteRights> Copyright © {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                      <SocialIcons>
                          <SocialIconLink href ='/' target='_blank' aria-label='Facebook'>
                              <FaFacebook />
                          </SocialIconLink>
                          <SocialIconLink href ='/' target='_blank' aria-label='Instagram'>
                              <FaInstagram />
                          </SocialIconLink>
                          <SocialIconLink href ='/' target='_blank' aria-label='Youtube'>
                              <FaYoutube />
                          </SocialIconLink>
                          <SocialIconLink href ='/' target='_blank' aria-label='Twitter'>
                              <FaTwitter />
                          </SocialIconLink>
                          <SocialIconLink href ='/' target='_blank' aria-label='LinkedIn'>
                              <FaLinkedin />
                          </SocialIconLink>
                      </SocialIcons>
                      </SocialMediaWrap>
                  </SocialMedia>
                  </FooterWrap>  
        </FooterContainer>
        )
}

export default Footer
