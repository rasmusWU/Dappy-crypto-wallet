import './NavBar.scss';

function NavBar() {
    return (
        <nav className="navBar">
            <section className="navBar__linkContainer">
                <section className="navBar__links">
                    <svg width="121" height="24" viewBox="0 0 121 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.8794 15.2922V4.86707H30.6255C31.3484 4.86707 32.0293 4.99585 32.6687 5.25336C33.3081 5.51093 33.866 5.87256 34.342 6.33801C34.8181 6.80353 35.1951 7.35468 35.4729 7.99176C35.7507 8.62915 35.8896 9.32727 35.8896 10.0864C35.8896 10.8003 35.7683 11.4603 35.5259 12.0657C35.2832 12.6713 34.9482 13.1976 34.5205 13.6451C34.0928 14.0925 33.5925 14.4539 33.0193 14.7296C32.446 15.0052 31.8291 15.1701 31.1677 15.2244C30.9736 15.2426 30.7793 15.2581 30.5857 15.2719C30.5168 15.2767 30.4475 15.2806 30.3774 15.2838C30.2502 15.2894 30.1213 15.2922 29.9905 15.2922H28.8794ZM40.6255 12.8315C40.8638 11.9685 40.9827 11.058 40.9827 10.0998C40.9827 9.15088 40.8613 8.24249 40.6189 7.37488C40.3762 6.50726 40.0369 5.69855 39.6006 4.94824C39.1641 4.19824 38.637 3.52039 38.0198 2.91467C37.4026 2.30927 36.7214 1.78955 35.9763 1.35571C35.231 0.921875 34.429 0.587769 33.5688 0.352539C32.7092 0.117615 31.8164 0 30.8906 0H24.3696C24.1667 0 24.0149 0.05896 23.9136 0.17627C23.8567 0.242065 23.8159 0.319153 23.791 0.407532C23.7861 0.424683 23.782 0.442261 23.7783 0.460266C23.7751 0.47583 23.7725 0.491699 23.7703 0.507874C23.7644 0.54895 23.7615 0.592102 23.7615 0.637329V19.576C23.7615 19.8112 23.823 19.9647 23.9463 20.0368C24.0701 20.1093 24.2112 20.1453 24.3696 20.1453H30.8906C31.8164 20.1453 32.7112 20.03 33.5757 19.7998C34.4397 19.5692 35.2441 19.2419 35.9895 18.8169C36.7346 18.3922 37.4136 17.8768 38.0264 17.2714C38.6392 16.666 39.166 15.9902 39.6069 15.2446C40.0479 14.499 40.3875 13.6947 40.6255 12.8315ZM61.1523 19.405C61.1704 19.3197 61.1794 19.2321 61.1794 19.1422V3.86383C61.1794 3.78833 61.1738 3.71674 61.1626 3.64899C61.1494 3.57086 61.1287 3.49786 61.1003 3.42999C61.0474 3.30359 60.959 3.19067 60.8359 3.09125C60.7385 2.99182 60.624 2.92847 60.4919 2.90143C60.4021 2.88293 60.3203 2.87079 60.2466 2.86493L60.1975 2.86182C60.1804 2.86108 60.1638 2.86072 60.1479 2.86072H58.1772C58.0007 2.86072 57.864 2.87213 57.7671 2.89441C57.6702 2.9173 57.5886 2.96222 57.5225 3.03021C57.4795 3.07416 57.4385 3.13324 57.3994 3.20752C57.3782 3.24786 57.3574 3.29272 57.3372 3.34204C57.2798 3.48218 57.207 3.66498 57.1189 3.89111L56.7354 5.12482C56.4973 4.77222 56.2197 4.44458 55.9021 4.1416C55.5847 3.83893 55.2295 3.57904 54.8372 3.36224C54.4448 3.14551 54.0127 2.97363 53.541 2.84717C53.0693 2.72076 52.5601 2.65741 52.0134 2.65741C50.814 2.65741 49.6899 2.88562 48.6406 3.34204C47.5911 3.7984 46.6785 4.42645 45.9026 5.22632C45.1265 6.02618 44.5139 6.96625 44.064 8.04596C43.6143 9.12622 43.3894 10.2945 43.3894 11.5505C43.3894 12.3821 43.4907 13.1796 43.6936 13.9431C43.8965 14.7072 44.1853 15.4188 44.5601 16.0784C44.9348 16.7382 45.3821 17.337 45.9026 17.8748C46.4229 18.4127 47.0024 18.8735 47.6421 19.2574C48.281 19.6417 48.969 19.9376 49.7053 20.1453C50.4414 20.3533 51.2109 20.4574 52.0134 20.4574C52.4631 20.4574 52.8972 20.4008 53.3162 20.2878C53.7349 20.1747 54.1274 20.0259 54.4934 19.8405C54.8594 19.6552 55.1943 19.4451 55.4985 19.2099C55.8027 18.9752 56.074 18.7356 56.3123 18.4916L56.4839 19.1014C56.5369 19.2554 56.5876 19.3976 56.6362 19.5285C56.6846 19.6596 56.7441 19.7704 56.8147 19.8608C56.8853 19.9511 56.9778 20.0212 57.0925 20.0708C57.207 20.1207 57.3569 20.1453 57.5422 20.1453H60.1479C60.2449 20.1453 60.3596 20.1318 60.4919 20.1048C60.624 20.0776 60.7385 20.0145 60.8359 19.915C60.959 19.8335 61.0474 19.7229 61.1003 19.5827C61.1223 19.5247 61.1396 19.4654 61.1523 19.405ZM48.1509 11.5504C48.1509 12.1467 48.241 12.7049 48.4219 13.2246C48.4353 13.2633 48.4492 13.3016 48.4636 13.3395L48.4836 13.3912L48.5098 13.4564C48.5515 13.5582 48.5964 13.6572 48.6445 13.7532C48.7961 14.0557 48.98 14.3292 49.1958 14.5736C49.5308 14.9531 49.9343 15.2538 50.406 15.475C50.8777 15.6967 51.4001 15.807 51.9734 15.807C52.5642 15.807 53.113 15.6967 53.6201 15.475C54.1272 15.2538 54.5679 14.9531 54.9429 14.5736C55.3174 14.194 55.6108 13.7444 55.8225 13.2246C56.0339 12.7049 56.1399 12.1467 56.1399 11.5504C56.1399 10.9719 56.0339 10.4205 55.8225 9.89636C55.6108 9.37244 55.3174 8.91138 54.9429 8.51367C54.5679 8.11591 54.1272 7.80206 53.6201 7.57153C53.113 7.341 52.5642 7.22571 51.9734 7.22571C51.4001 7.22571 50.8777 7.341 50.406 7.57153C49.9343 7.80206 49.5308 8.11591 49.1958 8.51367C48.8606 8.91138 48.6028 9.37244 48.4219 9.89636C48.241 10.4205 48.1509 10.9719 48.1509 11.5504ZM69.4199 19.2462V23.5651C69.4199 23.8052 69.23 23.9999 68.9956 23.9999H64.7786C64.5439 23.9999 64.354 23.8052 64.354 23.5651V3.86371C64.354 3.79028 64.3594 3.72211 64.3704 3.65918C64.3865 3.56714 64.4141 3.48621 64.4534 3.41638C64.5193 3.29907 64.6011 3.19055 64.698 3.09113C64.8125 2.9917 64.9316 2.92834 65.0552 2.90131C65.0815 2.89545 65.1077 2.89026 65.1338 2.88568C65.1719 2.87903 65.2095 2.87372 65.2466 2.86969C65.3027 2.86365 65.3582 2.8606 65.4124 2.8606H67.4094C67.5105 2.8606 67.6011 2.87048 67.6814 2.89032C67.7341 2.90332 67.7825 2.92059 67.8262 2.94208C67.9363 2.99609 68.0266 3.07086 68.0972 3.16559C68.168 3.26062 68.2273 3.3689 68.2759 3.49091C68.3242 3.61292 68.3706 3.7464 68.4148 3.89099L68.7126 4.77081C68.8237 5.09845 69.2449 5.16882 69.4507 4.89362C69.5393 4.77496 69.6284 4.65527 69.7175 4.53485C69.9688 4.19604 70.2666 3.88861 70.6104 3.61292C70.9543 3.33722 71.3643 3.10925 71.8406 2.92834C72.3167 2.74762 72.8987 2.65729 73.5864 2.65729C74.7944 2.65729 75.9077 2.8855 76.9263 3.34192C77.9448 3.79828 78.8223 4.42633 79.5586 5.2262C80.2947 6.02606 80.8701 6.96613 81.2844 8.04608C81.699 9.1261 81.906 10.2944 81.906 11.5504C81.906 12.7976 81.699 13.9635 81.2844 15.0479C80.8701 16.1326 80.2947 17.0747 79.5586 17.8746C78.8223 18.6745 77.9448 19.3048 76.9263 19.7659C75.9077 20.2267 74.7944 20.4573 73.5864 20.4573C73.0129 20.4573 72.5193 20.3871 72.1052 20.2469C71.6904 20.1071 71.3225 19.924 71.0005 19.6981C70.8262 19.5759 70.6628 19.4469 70.5107 19.3112C70.4827 19.2862 70.4551 19.261 70.4277 19.2355C70.3867 19.1974 70.3467 19.1587 70.3074 19.1194L70.2473 19.0583C70.2134 19.0234 70.1802 18.988 70.1475 18.9523C69.8872 18.6664 69.4199 18.8552 69.4199 19.2462ZM69.0503 11.347C69.0613 11.116 69.0898 10.8904 69.136 10.67L69.1492 10.6089C69.1584 10.5678 69.1685 10.5269 69.179 10.4861C69.2429 10.2373 69.3303 9.99548 69.4407 9.7608C69.6738 9.26385 69.9783 8.83215 70.3533 8.46606C70.7278 8.10028 71.1643 7.8111 71.6626 7.59869C72.1609 7.38635 72.6877 7.27991 73.2432 7.27991C73.8074 7.27991 74.3232 7.39313 74.7908 7.61896C75.2581 7.84485 75.6592 8.15222 75.9944 8.54059C76.3293 8.9295 76.5896 9.38354 76.7749 9.90308C76.96 10.423 77.0525 10.9722 77.0525 11.5503C77.0525 12.1469 76.96 12.7074 76.7749 13.2313C76.5896 13.7557 76.3293 14.2098 75.9944 14.5938C75.6592 14.978 75.2581 15.283 74.7908 15.5089C74.3232 15.7348 73.8074 15.8477 73.2432 15.8477C72.6699 15.8477 72.1277 15.7348 71.6162 15.5089C71.1047 15.283 70.6594 14.978 70.2803 14.5938C69.9011 14.2098 69.6013 13.7557 69.3811 13.2313C69.1604 12.7074 69.0503 12.1469 69.0503 11.5503V11.347ZM89.6172 19.2332V23.5703C89.6172 23.8076 89.4294 23.9999 89.198 23.9999H84.9707C84.7393 23.9999 84.5513 23.8076 84.5513 23.5703V3.86371C84.5513 3.68304 84.5845 3.534 84.6506 3.41638C84.7166 3.29907 84.7983 3.19055 84.8953 3.09113C85.0098 2.9917 85.1289 2.92834 85.2524 2.90131C85.3757 2.87408 85.4949 2.8606 85.6096 2.8606H87.6067C87.7742 2.8606 87.9131 2.88782 88.0234 2.94208C88.1335 2.99609 88.2239 3.07086 88.2944 3.16559C88.3652 3.26062 88.4246 3.3689 88.4731 3.49091C88.5215 3.61292 88.5679 3.7464 88.6121 3.89099L88.9131 4.77991C89.0227 5.10364 89.439 5.17297 89.6423 4.90088C89.7327 4.77991 89.8237 4.6579 89.9148 4.53485C90.166 4.19604 90.4639 3.88861 90.8076 3.61292C91.1516 3.33722 91.5615 3.10925 92.0378 2.92834C92.5139 2.74762 93.0959 2.65729 93.7837 2.65729C94.9917 2.65729 96.105 2.8855 97.1235 3.34192C98.1421 3.79828 99.0195 4.42633 99.7559 5.2262C100.492 6.02606 101.067 6.96613 101.482 8.04608C101.896 9.1261 102.103 10.2944 102.103 11.5504C102.103 12.7976 101.896 13.9635 101.482 15.0479C101.067 16.1326 100.492 17.0747 99.7559 17.8746C99.0195 18.6745 98.1421 19.3048 97.1235 19.7659C96.105 20.2267 94.9917 20.4573 93.7837 20.4573C93.6602 20.4573 93.5403 20.454 93.4241 20.4474C93.3105 20.4411 93.2004 20.4316 93.0938 20.4191C92.9751 20.405 92.8608 20.3871 92.751 20.3654C92.5923 20.3339 92.4429 20.2945 92.3025 20.2469C91.8877 20.1071 91.5198 19.924 91.1978 19.6981C90.876 19.4723 90.5916 19.2236 90.3447 18.9523L90.3374 18.9442C90.0798 18.6609 89.6172 18.8461 89.6172 19.2332ZM89.2468 11.347C89.2732 10.7868 89.4033 10.2579 89.6372 9.7608C89.8704 9.26385 90.1748 8.83215 90.5498 8.46606C90.9243 8.10028 91.3608 7.8111 91.8591 7.59869C92.3574 7.38635 92.8843 7.27991 93.4397 7.27991C94.0039 7.27991 94.5198 7.39313 94.9873 7.61896C95.4546 7.84485 95.8557 8.15222 96.1909 8.54059C96.5259 8.9295 96.7861 9.38354 96.9714 9.90308C97.1565 10.423 97.249 10.9722 97.249 11.5503C97.249 12.1469 97.1565 12.7074 96.9714 13.2313C96.7861 13.7557 96.5259 14.2098 96.1909 14.5938C95.8557 14.978 95.4546 15.283 94.9873 15.5089C94.5198 15.7348 94.0039 15.8477 93.4397 15.8477C92.8665 15.8477 92.3242 15.7348 91.8127 15.5089C91.3013 15.283 90.856 14.978 90.4768 14.5938C90.0977 14.2098 89.7979 13.7557 89.5776 13.2313C89.3569 12.7074 89.2468 12.1469 89.2468 11.5503V11.347ZM107.983 23.441L109.188 20.2296C109.225 20.132 109.224 20.0234 109.186 19.9266L102.936 4.2298C102.795 3.86841 102.793 3.55872 102.93 3.30115C103.067 3.04364 103.368 2.91486 103.836 2.91486H107.103C107.323 2.91486 107.504 2.98492 107.645 3.12488C107.786 3.26508 107.892 3.43903 107.963 3.64673L111.323 13.4446C111.449 13.8122 111.957 13.8104 112.081 13.442L115.37 3.64673C115.467 3.35779 115.59 3.16357 115.74 3.0639C115.89 2.96472 116.097 2.91486 116.362 2.91486H119.761C120.008 2.91486 120.202 2.94861 120.343 3.01636C120.484 3.08411 120.583 3.17474 120.64 3.28766C120.686 3.37683 120.708 3.47455 120.706 3.58069C120.706 3.60895 120.704 3.63782 120.7 3.66724C120.682 3.80743 120.647 3.94501 120.594 4.08051C120.259 4.93024 119.893 5.85889 119.497 6.86646C119.1 7.87427 118.687 8.92261 118.26 10.0117C117.832 11.1008 117.398 12.208 116.957 13.3332C116.516 14.4584 116.086 15.563 115.667 16.6477C115.249 17.7321 114.845 18.7739 114.457 19.7724C114.069 20.7709 113.714 21.6884 113.392 22.5246C113.225 22.9581 113.071 23.3616 112.927 23.7396C112.867 23.8972 112.719 24 112.553 24H108.357C108.075 24 107.882 23.7105 107.983 23.441Z" fill="#1F2431"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.85133 8.64014C4.42607 8.64014 5.70265 7.35072 5.70265 5.76013C5.70265 4.16955 4.42607 2.88013 2.85133 2.88013C1.27658 2.88013 0 4.16955 0 5.76013C0 7.35072 1.27658 8.64014 2.85133 8.64014Z" fill="#315EFB"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.356 18.24C13.9307 18.24 15.2073 16.9506 15.2073 15.36C15.2073 13.7694 13.9307 12.48 12.356 12.48C10.7812 12.48 9.50464 13.7694 9.50464 15.36C9.50464 16.9506 10.7812 18.24 12.356 18.24Z" fill="#315EFB"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2831 3.84034C10.668 3.84034 9.35864 5.16283 9.35864 6.79419C9.35864 8.42556 10.668 9.74805 12.2831 9.74805C13.8982 9.74805 15.2075 8.42556 15.2075 6.79419C15.2075 5.16283 13.8982 3.84034 12.2831 3.84034Z" fill="#315EFB"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.92493 13.2925C1.3098 13.2925 0.000488758 14.615 0.000488758 16.2463C0.000488758 17.8777 1.3098 19.2002 2.92493 19.2002C4.54005 19.2002 5.84937 17.8777 5.84937 16.2463C5.84937 14.615 4.54005 13.2925 2.92493 13.2925Z" fill="#315EFB"/>
                    </svg>
                    <a href="!#">How it works</a>
                    <a href="!#">Blog</a>
                    <a href="!#">Support</a>
                </section>
            </section>
            <section className="navBar__icons">
                <div className="botSection__contact__iconsContainer">
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
        </nav>
    )
}

export default NavBar;