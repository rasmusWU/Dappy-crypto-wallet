import './BotSection.scss';

function BotSection() {
    return (
        <div className="botSection">
            <section className="botSection__about">
                <h4>About</h4>
                <div className="botSection__about__container">
                    <a href="!#">Introducing</a>
                    <a href="!#">Terms of Service</a>
                    <a href="!#">Privacy Policy</a>
                </div>
            </section>
            <section className="botSection__contact">
                <h4>Contact</h4>
                <a href="!#">hello@dappywallet.com</a>
                <div className="botSection__contact__icons">
                    <a href="!#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.37152 18.627 0 12 0ZM17.97 9.30598L17.979 9.68848C17.979 13.5945 15.0075 18.0945 9.57297 18.0945C7.90498 18.0945 6.35246 17.6055 5.04447 16.767C5.2755 16.794 5.51096 16.809 5.74949 16.809C7.134 16.809 8.40749 16.3365 9.41848 15.5444C8.1255 15.5205 7.03497 14.6655 6.65848 13.4925C6.83996 13.527 7.02298 13.5435 7.21497 13.5435C7.48497 13.5435 7.74595 13.509 7.99345 13.4415C6.64195 13.1685 5.62346 11.976 5.62346 10.545V10.5075C6.02245 10.7295 6.47695 10.8615 6.96145 10.878C6.16944 10.3485 5.64744 9.44404 5.64744 8.41953C5.64744 7.87804 5.79296 7.37104 6.04643 6.93455C7.50294 8.72254 9.68093 9.89853 12.1364 10.0215C12.0854 9.80552 12.06 9.57904 12.06 9.34806C12.06 7.71758 13.3829 6.39455 15.015 6.39455C15.8639 6.39455 16.632 6.75302 17.1719 7.32752C17.8439 7.194 18.4769 6.94802 19.0484 6.61052C18.8279 7.30053 18.36 7.87952 17.7494 8.2455C18.345 8.17499 18.9164 8.01447 19.4459 7.78049C19.05 8.37147 18.5475 8.89199 17.97 9.30598Z" fill="#1F2431"/>
                    </svg></a>
                    <a href="!#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.6 8.3999H10.2V11.9999H13.6C14.59 11.9999 15.4 11.1899 15.4 10.1999C15.4 9.2099 14.59 8.3999 13.6 8.3999Z" fill="#1F2431"/>
                        <path d="M12 0C5.37 0 0 5.37 0 12C0 18.63 5.37 24 12 24C18.63 24 24 18.63 24 12C24 5.37 18.63 0 12 0ZM13.6 14.4H10.2V18H7.8V6H13.6C15.92 6 17.8 7.88 17.8 10.2C17.8 12.52 15.92 14.4 13.6 14.4Z" fill="#1F2431"/>
                    </svg></a>
                    <a href="!#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0175 11.9365C12.012 11.9365 12.0057 11.9362 12 11.936C11.994 11.9362 11.9878 11.9365 11.9823 11.9365C10.493 11.9365 9.18075 11.5595 8.40525 12.2715C7.9405 12.6987 7.74475 13.2135 7.74475 13.7677C7.74475 16.083 9.59975 16.3673 11.982 16.3673H12.0175C14.3997 16.3673 16.2547 16.0828 16.2547 13.7677C16.2547 13.2133 16.059 12.6987 15.5942 12.2715C14.8187 11.5595 13.5068 11.9365 12.0175 11.9365ZM9.992 15.1003C9.53875 15.1003 9.17125 14.5913 9.17125 13.9635C9.17125 13.3357 9.53875 12.827 9.992 12.827C10.4452 12.827 10.8132 13.3357 10.8132 13.9635C10.8132 14.5913 10.4452 15.1003 9.992 15.1003ZM14.0077 15.1003C13.5542 15.1003 13.1865 14.5913 13.1865 13.9635C13.1865 13.3357 13.5542 12.827 14.0077 12.827C14.4607 12.827 14.8285 13.3357 14.8285 13.9635C14.8285 14.5913 14.461 15.1003 14.0077 15.1003ZM12 0C5.37225 0 0 5.3725 0 12C0 18.6275 5.37225 24 12 24C18.6273 24 24 18.6275 24 12C24 5.3725 18.6273 0 12 0ZM13.0945 16.9252C12.8795 16.9252 12.452 16.9258 12 16.9263C11.5478 16.9258 11.12 16.9252 10.9052 16.9252C9.9545 16.9252 6.1895 16.8525 6.1895 12.314C6.1895 11.2698 6.5475 10.5058 7.13325 9.8695C7.03975 9.63875 7.035 8.32825 7.53375 7.07375C7.53375 7.07375 8.67775 7.19925 10.4087 8.387C10.7715 8.28675 11.3857 8.23675 12 8.23675C12.6138 8.23675 13.228 8.2865 13.5913 8.387C15.322 7.19925 16.4657 7.07375 16.4657 7.07375C16.9645 8.32825 16.96 9.63875 16.8665 9.8695C17.4525 10.5058 17.8105 11.27 17.8105 12.314C17.8105 16.8525 14.0452 16.9252 13.0945 16.9252Z" fill="#1F2431"/>
                    </svg></a>
                    <a href="!#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.16211 10.7695C5.92223 10.5814 5.62687 10.4731 5.31947 10.4731C4.56571 10.4731 3.95288 11.087 3.95288 11.8412C3.95288 12.2782 4.16379 12.6814 4.50629 12.935C4.79061 12.1213 5.36735 11.3823 6.16211 10.7695Z" fill="#1F2431"/>
                        <path d="M17.8615 7.39457C18.4245 7.39457 18.8824 6.93618 18.8824 6.3727C18.8824 5.80922 18.4245 5.35132 17.8615 5.35132C17.298 5.35132 16.8391 5.80922 16.8391 6.3727C16.8391 6.93618 17.298 7.39457 17.8615 7.39457Z" fill="#1F2431"/>
                        <path d="M12 0C5.37281 0 0 5.37281 0 12C0 18.6272 5.37281 24 12 24C18.6272 24 24 18.6272 24 12C24 5.37281 18.6272 0 12 0ZM19.5754 13.5119C19.6076 13.701 19.6282 13.8923 19.6282 14.0874C19.6282 16.896 16.1904 19.1806 11.9644 19.1806C7.73868 19.1806 4.30134 16.896 4.30134 14.0874C4.30134 13.8802 4.3254 13.6774 4.36174 13.4771C3.78525 13.139 3.42089 12.5198 3.42089 11.8414C3.42089 10.7935 4.27261 9.94177 5.31978 9.94177C5.7983 9.94177 6.25399 10.1321 6.60362 10.4544C7.95548 9.57299 9.79495 9.02351 11.8254 8.99896L13.0076 5.25987C13.0499 5.12655 13.1878 5.04847 13.3226 5.08088L16.4172 5.80935C16.6436 5.23139 17.2039 4.81964 17.8616 4.81964C18.7178 4.81964 19.4148 5.51644 19.4148 6.37283C19.4148 7.22922 18.7178 7.92651 17.8616 7.92651C17.0048 7.92651 16.308 7.22922 16.308 6.37283C16.308 6.35834 16.3117 6.34558 16.3121 6.33109L13.4412 5.65492L12.3806 9.00829C14.3222 9.07777 16.0759 9.62406 17.3711 10.4814C17.7232 10.1414 18.1835 9.94152 18.6802 9.94152C19.7276 9.94152 20.5801 10.7937 20.5801 11.8414C20.5794 12.5519 20.1904 13.1839 19.5754 13.5119Z" fill="#1F2431"/>
                        <path d="M8.26538 13.145C8.26538 12.5217 8.77263 12.0144 9.39602 12.0144C10.0194 12.0144 10.5264 12.5217 10.5264 13.145C10.5264 13.7684 10.0197 14.2754 9.39602 14.2754C8.77239 14.2754 8.26538 13.7684 8.26538 13.145ZM14.743 16.4969C14.1734 17.067 13.279 17.3438 12.0091 17.3438C12.0062 17.3438 12.0035 17.3415 12.0001 17.3415C11.9966 17.3415 11.9939 17.3438 11.9905 17.3438C10.7206 17.3438 9.82642 17.067 9.25656 16.4969C9.15295 16.3933 9.15295 16.2251 9.25656 16.121C9.36066 16.0174 9.52885 16.0174 9.63295 16.121C10.0977 16.5863 10.8687 16.8119 11.9905 16.8119C11.9939 16.8119 11.9966 16.8139 12.0001 16.8139C12.0035 16.8139 12.0062 16.8119 12.0091 16.8119C13.1312 16.8119 13.9024 16.5861 14.3672 16.121C14.4713 16.0174 14.6394 16.0174 14.7435 16.121C14.8472 16.2251 14.8472 16.3936 14.743 16.4969ZM14.6083 14.2754C13.9854 14.2754 13.4779 13.7689 13.4779 13.145C13.4779 12.5212 13.9849 12.0144 14.6083 12.0144C15.2316 12.0144 15.7386 12.5217 15.7386 13.145C15.7386 13.7684 15.2316 14.2754 14.6083 14.2754Z" fill="#1F2431"/>
                        <path d="M18.6795 10.4731C18.3534 10.4731 18.0475 10.5908 17.803 10.7955C18.5928 11.4133 19.1629 12.1572 19.4382 12.9753C19.8141 12.7251 20.0471 12.307 20.0471 11.8412C20.0471 11.087 19.4342 10.4731 18.6795 10.4731Z" fill="#1F2431"/>
                    </svg></a>
                    <a href="!#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.1819 13.0908H10.9092V15.2726H14.1819C15.6239 15.2726 15.6239 13.0908 14.1819 13.0908Z" fill="#1F2431"/>
                        <path d="M14.1819 8.72729H10.9092V10.9091H14.1819C15.6239 10.9091 15.6239 8.72729 14.1819 8.72729Z" fill="#1F2431"/>
                        <path d="M12 0C5.51033 0 0 5.29164 0 12C0 18.6257 5.40182 24 12 24C18.6168 24 24 18.6168 24 12C24 5.3832 18.6168 0 12 0ZM14.1818 17.4545H13.0909V18.5455C13.0909 19.9835 10.9091 19.9894 10.9091 18.5455V17.4545H7.63636C6.19833 17.4545 6.19244 15.2727 7.63636 15.2727H8.72727V8.72727H7.63636C6.19833 8.72727 6.19244 6.54545 7.63636 6.54545H10.9091V5.45455C10.9091 4.01651 13.0909 4.01062 13.0909 5.45455V6.54545H14.1818C16.9819 6.54545 18.521 9.87353 16.6033 12C18.521 14.1265 16.9819 17.4545 14.1818 17.4545Z" fill="#1F2431"/>
                    </svg></a>
                    <a href="!#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37256 18.6274 0 12 0C5.37256 0 0 5.37256 0 12C0 18.6274 5.37256 24 12 24ZM10 8C10 9.10449 9.10449 10 8 10C6.89551 10 6 9.10449 6 8C6 6.89551 6.89551 6 8 6C9.10449 6 10 6.89551 10 8ZM18 8C18 9.10449 17.1045 10 16 10C14.8955 10 14 9.10449 14 8C14 6.89551 14.8955 6 16 6C17.1045 6 18 6.89551 18 8ZM18 16C18 17.1045 17.1045 18 16 18C14.8955 18 14 17.1045 14 16C14 14.8955 14.8955 14 16 14C17.1045 14 18 14.8955 18 16ZM10 16C10 17.1045 9.10449 18 8 18C6.89551 18 6 17.1045 6 16C6 14.8955 6.89551 14 8 14C9.10449 14 10 14.8955 10 16Z" fill="#1F2431"/>
                    </svg></a>
                </div>
            </section>
            <section className="botSection__newsLetter">
                <h4>Newsletter</h4>
                <p className="botSection__newsLetter__text">Please enter your e-mail if want to receive updates.</p>
                <form className="botSection__email" action="">
                    <input className="botSection__emailInput" placeholder="Your e-mail" type="email" name="" id=""/>
                    <button className="botSection__emailBtn">Subscribe</button>
                </form>
                <p className="botSection__credit">Designed by <a href="" className="botSection__shakka">Shakka.Agency</a> 🤙</p>
            </section>
        </div>
    )
}

export default BotSection;