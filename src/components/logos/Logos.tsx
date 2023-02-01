import React from 'react';
import { SvgXml } from 'react-native-svg';


const smallSvg = `
<svg width="203" height="69" viewBox="0 0 203 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.0607 35.175H25.4213V40.5C25.9611 41.0173 26.553 41.4772 27.1876 41.8725V36.135C27.144 35.8674 27.0068 35.6239 26.8004 35.4481C26.594 35.2722 26.3319 35.1755 26.0607 35.175V35.175Z" fill="black"/>
<path d="M25.9426 30.3506H26.1076C26.4711 30.3542 26.8335 30.3931 27.1895 30.4668V23.5987C26.5545 23.9935 25.9626 24.4535 25.4232 24.9712V30.3506H25.9426Z" fill="black"/>
<path d="M23.897 26.7975C23.1773 27.8824 22.662 29.0898 22.3763 30.36H23.897V26.7975Z" fill="black"/>
<path d="M22.3857 35.175C22.6771 36.4293 23.1922 37.6209 23.9063 38.6925V35.175H22.3857Z" fill="black"/>
<path d="M41.8369 26.8312V38.6437C42.9885 36.8891 43.602 34.8362 43.602 32.7375C43.602 30.6388 42.9885 28.5858 41.8369 26.8312V26.8312Z" fill="black"/>
<path d="M38.5763 29.0362V41.8425C39.2117 41.4405 39.8036 40.9736 40.3426 40.4493V27.6412C39.8558 28.2225 39.2546 28.6974 38.5763 29.0362Z" fill="black"/>
<path d="M35.8895 24.7668H35.9907C36.2193 24.7654 36.4422 24.6953 36.6305 24.5655C36.8187 24.4358 36.9636 24.2525 37.0463 24.0393V22.83C36.4756 22.5873 35.8845 22.3953 35.2801 22.2562V24.7631L35.8895 24.7668Z" fill="black"/>
<path d="M35.9888 29.5575H35.867H35.7657H35.2838V43.2206C35.8889 43.0806 36.4805 42.888 37.052 42.645V29.4543C36.7017 29.523 36.3457 29.5575 35.9888 29.5575Z" fill="black"/>
<path d="M33.212 29.5612H33.0676C32.8288 29.5614 32.596 29.6367 32.4022 29.7763C32.2084 29.9159 32.0634 30.1129 31.9876 30.3393V43.4643C32.2726 43.4868 32.5613 43.4981 32.852 43.4981C33.1426 43.4981 33.4557 43.485 33.7538 43.4606V29.5668L33.212 29.5612Z" fill="black"/>
<path d="M33.0751 24.7668H33.7595V22.0218C33.4613 21.9975 33.1595 21.9843 32.8538 21.9843C32.5482 21.9843 32.2782 21.9956 31.9932 22.0181V24.8737C32.3495 24.8031 32.7118 24.7673 33.0751 24.7668V24.7668Z" fill="black"/>
<path d="M38.5726 23.625V23.7075V23.8293C38.5725 23.981 38.5581 24.1323 38.5295 24.2812C38.5295 24.3037 38.5295 24.3281 38.5163 24.3506C38.4976 24.4275 38.4788 24.5025 38.4545 24.5775C38.4545 24.5962 38.4413 24.615 38.4357 24.6337C38.3987 24.7357 38.3555 24.8352 38.3063 24.9318C38.2932 24.96 38.2782 24.9862 38.2632 25.0125C38.2482 25.0387 38.2088 25.1062 38.1788 25.1512C38.1488 25.1962 38.1432 25.2056 38.1245 25.2318C38.0796 25.2968 38.0314 25.3594 37.9801 25.4193L37.9388 25.4662L37.8826 25.5262L37.7813 25.6237H37.772C37.7345 25.6593 37.6932 25.6931 37.6538 25.725C37.59 25.7758 37.5237 25.8234 37.4551 25.8675L37.4045 25.8993C37.3426 25.9368 37.277 25.9725 37.217 26.0043H37.2038L37.1513 26.0306C37.0434 26.0798 36.9318 26.1206 36.8176 26.1525C36.6023 26.2137 36.3795 26.2446 36.1557 26.2443H36.0601H32.8763C32.5116 26.2437 32.1484 26.2917 31.7963 26.3868C31.3146 26.5154 30.8599 26.7295 30.4538 27.0187V27.0187V22.2525C29.8501 22.3892 29.2592 22.5774 28.6876 22.815V32.625C28.6332 32.5856 28.577 32.5481 28.5188 32.5106L28.427 32.4525C28.3056 32.3779 28.1804 32.3097 28.052 32.2481L27.9001 32.1806L27.8401 32.1562L27.7501 32.1206L27.647 32.0831L27.5701 32.0568L27.3976 32.0043C27.0301 31.9142 26.6528 31.8707 26.2745 31.875H22.1495C22.127 32.1575 22.1157 32.4443 22.1157 32.7356C22.1157 33.0412 22.1288 33.3431 22.1532 33.6412H26.1507L26.4788 33.6562C26.5538 33.6562 26.6307 33.6731 26.7095 33.6881L26.7788 33.7012H26.8163C27.2375 33.7973 27.6253 34.0045 27.9392 34.3013C28.2531 34.5981 28.4818 34.9736 28.6013 35.3887C28.6126 35.4281 28.622 35.4656 28.6313 35.505C28.6407 35.5443 28.6407 35.5443 28.6445 35.5631C28.6482 35.5818 28.6595 35.6437 28.6651 35.6831C28.6782 35.7637 28.6857 35.8443 28.6913 35.9268C28.6913 35.9681 28.6913 36.0093 28.6913 36.0525V36.1875V42.6506C29.263 42.8881 29.8539 43.0763 30.4576 43.2131V36.1875V36.0675V30.5718V30.45C30.4576 30.0129 30.575 29.584 30.7977 29.2079C31.0203 28.8319 31.34 28.5226 31.7232 28.3125L31.7963 28.275C31.8601 28.2431 31.9238 28.215 31.9838 28.1887L32.0401 28.1681C32.306 28.07 32.5873 28.0199 32.8707 28.02H36.1388C36.4962 28.0217 36.8523 27.9769 37.1982 27.8868C37.3232 27.8531 37.4482 27.8137 37.5732 27.7687C37.9262 27.6397 38.2599 27.4631 38.5651 27.2437L38.6045 27.2156L38.7188 27.1293L38.7976 27.0656C38.852 27.0206 38.9026 26.9756 38.9551 26.9287C39.0076 26.8818 39.0732 26.8162 39.1313 26.7581L39.2288 26.6531C39.2757 26.6025 39.3207 26.55 39.3657 26.4975C39.4107 26.445 39.4501 26.3925 39.4895 26.3381C39.5288 26.2837 39.5701 26.2293 39.6076 26.1731C39.6451 26.1168 39.6807 26.0606 39.7163 26.0043C39.752 25.9481 39.8026 25.8562 39.842 25.7812C39.8813 25.7062 39.9038 25.6593 39.932 25.5937L39.9713 25.5112L40.0163 25.4025C40.0538 25.3106 40.0876 25.215 40.1176 25.1231C40.1301 25.0881 40.1413 25.0525 40.1513 25.0162C40.1645 24.9712 40.1776 24.9243 40.1888 24.8793C39.6911 24.411 39.1499 23.9909 38.5726 23.625V23.625Z" fill="black"/>
<path d="M50.0251 35.8425C51.4332 36.8812 53.3119 37.5187 54.7876 37.5187C56.0288 37.5187 56.8669 37.1437 56.8669 36.2062C56.8669 35.2987 56.2294 34.9312 54.5869 34.5956C51.1988 33.9918 49.7888 32.6493 49.7888 29.9325C49.7888 26.6456 52.2713 25.1362 55.4907 25.1362C57.2701 25.1362 58.5769 25.5112 59.8857 26.2443V29.8331C58.4776 28.8956 57.1688 28.3912 55.6257 28.3912C54.2832 28.3912 53.7132 28.9537 53.7132 29.6643C53.7132 30.4368 54.2513 30.8381 55.6594 31.1643C59.5163 31.8693 60.8251 33.345 60.8251 36.0281C60.8251 39.2812 58.3763 40.7568 54.8869 40.7568C53.0757 40.7568 51.2326 40.3218 50.0251 39.5493V35.8425Z" fill="black"/>
<path d="M80.9119 31.08C80.9119 29.5031 80.2088 28.6968 78.6319 28.6968C77.5594 28.6968 76.4851 28.9331 75.8194 29.2593C76.0213 29.748 76.1239 30.2719 76.1213 30.8006V40.4268H72.0582V31.0706C72.0582 29.4937 71.3194 28.6875 69.7763 28.6875C68.9241 28.6848 68.0763 28.8112 67.262 29.0625V40.4325H63.2363V26.4506C65.3904 25.6154 67.6762 25.171 69.9863 25.1381C71.7301 25.1381 73.2057 25.575 74.1113 26.3118C75.4538 25.7081 76.9951 25.1381 79.1738 25.1381C82.7363 25.1381 84.9769 26.5143 84.9769 30.9075V40.4325H80.9119V31.08Z" fill="black"/>
<path d="M95.4038 30.6431C95.4038 29.2012 94.1963 28.5975 92.7207 28.5975C91.1907 28.5956 89.6912 29.0258 88.3951 29.8387V26.3493C89.7357 25.5787 91.5132 25.1418 93.4257 25.1418C96.8475 25.1418 99.3957 26.4843 99.3957 30.4762V40.1362C97.5427 40.5268 95.6549 40.7285 93.7613 40.7381C89.97 40.7381 87.0526 39.5981 87.0526 36.1443C87.0526 33.0243 89.5688 31.5487 93.7613 31.5487H95.4038V30.6431ZM95.4038 34.1306H94.0632C92.1882 34.1306 91.0782 34.6687 91.0782 35.9418C91.0782 37.215 92.1169 37.7868 93.7275 37.7868C94.2907 37.7925 94.8528 37.7366 95.4038 37.62V34.1306Z" fill="black"/>
<path d="M105.926 40.4362H101.903V26.625C103.545 25.7531 105.692 25.2506 107.873 25.2506C108.927 25.2316 109.978 25.3674 110.993 25.6537V29.5443C110.019 29.1412 108.945 29.04 107.974 29.04C107.278 29.0453 106.587 29.1586 105.926 29.3756V40.4362Z" fill="black"/>
<path d="M113.124 25.4775H115.374V21.7875H119.4V25.4775H123.66V28.8318H119.396V34.8318C119.396 36.5418 120.201 37.0818 121.408 37.0818C122.387 37.0727 123.342 36.781 124.159 36.2418V39.9375C123.086 40.5 121.811 40.7756 120.302 40.7756C117.72 40.7756 115.371 39.5343 115.371 35.9137V28.8318H113.121L113.124 25.4775Z" fill="black"/>
<path d="M141.36 36.0431L144.142 25.4775H148.202L143.874 40.4362H139.374L136.691 30.6862L133.974 40.4362H129.553L125.226 25.4775H129.418L132.169 36.0431L135.024 25.4775H138.546L141.36 36.0431Z" fill="black"/>
<path d="M157.421 30.6431C157.421 29.2012 156.214 28.5975 154.738 28.5975C153.208 28.5956 151.708 29.0259 150.411 29.8387V26.3493C151.753 25.5787 153.531 25.1418 155.443 25.1418C158.863 25.1418 161.413 26.4843 161.413 30.4762V40.1362C159.56 40.5267 157.671 40.7283 155.777 40.7381C151.988 40.7381 149.07 39.5981 149.07 36.1443C149.07 33.0243 151.584 31.5487 155.777 31.5487H157.421V30.6431ZM157.421 34.1306H156.079C154.204 34.1306 153.094 34.6687 153.094 35.9418C153.094 37.215 154.134 37.7868 155.745 37.7868C156.308 37.7925 156.87 37.7365 157.421 37.62V34.1306Z" fill="black"/>
<path d="M170.927 36.2118L174.677 25.4775H178.903L170.719 46.4775H166.734L168.847 40.9106L162.711 25.4812H167.104L170.927 36.2118Z" fill="black"/>
</svg>
`;
const SmallLogo = () => {
    return (
        <SvgXml xml={smallSvg} width="100%" height="100%" />
    );
};

const mediumSvg = `
<svg width="269" height="91" viewBox="0 0 269 91" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.9651 46.9081H33.1126V54.0081C33.8323 54.6978 34.6215 55.3111 35.4676 55.8381V48.1881C35.4095 47.8313 35.2266 47.5067 34.9514 47.2723C34.6762 47.0378 34.3266 46.9088 33.9651 46.9081V46.9081Z" fill="black"/>
<path d="M33.8076 40.4756H34.0276C34.5123 40.4804 34.9954 40.5323 35.4701 40.6306V31.4731C34.6235 31.9995 33.8343 32.6128 33.1151 33.3031V40.4756H33.8076Z" fill="black"/>
<path d="M31.0801 35.7381C30.1206 37.1847 29.4335 38.7945 29.0526 40.4881H31.0801V35.7381Z" fill="black"/>
<path d="M29.0651 46.9081C29.4536 48.5806 30.1404 50.1693 31.0926 51.5981V46.9081H29.0651Z" fill="black"/>
<path d="M55.0001 35.7831V51.5331C56.5355 49.1937 57.3535 46.4564 57.3535 43.6581C57.3535 40.8598 56.5355 38.1226 55.0001 35.7831V35.7831Z" fill="black"/>
<path d="M50.6526 38.7231V55.7981C51.4998 55.2622 52.289 54.6396 53.0076 53.9406V36.8631C52.3586 37.6382 51.5569 38.2713 50.6526 38.7231Z" fill="black"/>
<path d="M47.0701 33.0306H47.2051C47.5099 33.0287 47.8071 32.9352 48.0581 32.7622C48.3091 32.5892 48.5023 32.3448 48.6126 32.0606V30.4481C47.8516 30.1245 47.0635 29.8685 46.2576 29.6831V33.0256L47.0701 33.0306Z" fill="black"/>
<path d="M47.2026 39.4181H47.0401H46.9051H46.2626V57.6356C47.0693 57.449 47.8581 57.1922 48.6201 56.8681V39.2806C48.1532 39.3721 47.6784 39.4182 47.2026 39.4181Z" fill="black"/>
<path d="M43.5001 39.4231H43.3076C42.9891 39.4234 42.6788 39.5237 42.4204 39.7099C42.1621 39.896 41.9687 40.1586 41.8676 40.4606V57.9606C42.2476 57.9906 42.6326 58.0056 43.0201 58.0056C43.4076 58.0056 43.8251 57.9881 44.2226 57.9556V39.4306L43.5001 39.4231Z" fill="black"/>
<path d="M43.3176 33.0306H44.2301V29.3706C43.8326 29.3381 43.4301 29.3206 43.0226 29.3206C42.6151 29.3206 42.2551 29.3356 41.8751 29.3656V33.1731C42.3502 33.079 42.8333 33.0312 43.3176 33.0306V33.0306Z" fill="black"/>
<path d="M50.6476 31.5081V31.6181V31.7806C50.6475 31.9828 50.6283 32.1846 50.5901 32.3831C50.5901 32.4131 50.5901 32.4456 50.5726 32.4756C50.5476 32.5781 50.5226 32.6781 50.4901 32.7781C50.4901 32.8031 50.4726 32.8281 50.4651 32.8531C50.4158 32.989 50.3582 33.1218 50.2926 33.2506C50.2751 33.2881 50.2551 33.3231 50.2351 33.3581C50.2151 33.3931 50.1626 33.4831 50.1226 33.5431C50.0826 33.6031 50.0751 33.6156 50.0501 33.6506C49.9903 33.7372 49.926 33.8206 49.8576 33.9006L49.8026 33.9631L49.7276 34.0431L49.5926 34.1731H49.5801C49.5301 34.2206 49.4751 34.2656 49.4226 34.3081C49.3375 34.3759 49.2491 34.4393 49.1576 34.4981L49.0901 34.5406C49.0076 34.5906 48.9201 34.6381 48.8401 34.6806H48.8226L48.7526 34.7156C48.6087 34.7812 48.4599 34.8356 48.3076 34.8781C48.0205 34.9597 47.7235 35.0009 47.4251 35.0006H47.2976H43.0526C42.5663 34.9998 42.082 35.0637 41.6126 35.1906C40.9703 35.3621 40.364 35.6474 39.8226 36.0331V36.0331V29.6781C39.0176 29.8605 38.2298 30.1114 37.4676 30.4281V43.5081C37.3951 43.4556 37.3201 43.4056 37.2426 43.3556L37.1201 43.2781C36.9582 43.1787 36.7914 43.0878 36.6201 43.0056L36.4176 42.9156L36.3376 42.8831L36.2176 42.8356L36.0801 42.7856L35.9776 42.7506L35.7476 42.6806C35.2577 42.5604 34.7545 42.5024 34.2501 42.5081H28.7501C28.7201 42.8848 28.7051 43.2673 28.7051 43.6556C28.7051 44.0631 28.7226 44.4656 28.7551 44.8631H34.0851L34.5226 44.8831C34.6226 44.8831 34.7251 44.9056 34.8301 44.9256L34.9226 44.9431H34.9726C35.5342 45.0712 36.0512 45.3475 36.4698 45.7432C36.8883 46.1389 37.1932 46.6396 37.3526 47.1931C37.3676 47.2456 37.3801 47.2956 37.3926 47.3481C37.4051 47.4006 37.4051 47.4006 37.4101 47.4256C37.4151 47.4506 37.4301 47.5331 37.4376 47.5856C37.4551 47.6931 37.4651 47.8006 37.4726 47.9106C37.4726 47.9656 37.4726 48.0206 37.4726 48.0781V48.2581V56.8756C38.2348 57.1923 39.0226 57.4433 39.8276 57.6256V48.2581V48.0981V40.7706V40.6081C39.8276 40.0254 39.9842 39.4534 40.2811 38.952C40.5779 38.4506 41.0042 38.0383 41.5151 37.7581L41.6126 37.7081C41.6976 37.6656 41.7826 37.6281 41.8626 37.5931L41.9376 37.5656C42.2922 37.4348 42.6672 37.368 43.0451 37.3681H47.4026C47.8791 37.3704 48.3539 37.3107 48.8151 37.1906C48.9818 37.1456 49.1484 37.0931 49.3151 37.0331C49.7858 36.8611 50.2307 36.6256 50.6376 36.3331L50.6901 36.2956L50.8426 36.1806L50.9476 36.0956C51.0201 36.0356 51.0876 35.9756 51.1576 35.9131C51.2276 35.8506 51.3151 35.7631 51.3926 35.6856L51.5226 35.5456C51.5851 35.4781 51.6451 35.4081 51.7051 35.3381C51.7651 35.2681 51.8176 35.1981 51.8701 35.1256C51.9226 35.0531 51.9776 34.9806 52.0276 34.9056C52.0776 34.8306 52.1251 34.7556 52.1726 34.6806C52.2201 34.6056 52.2876 34.4831 52.3401 34.3831C52.3926 34.2831 52.4226 34.2206 52.4601 34.1331L52.5126 34.0231L52.5726 33.8781C52.6226 33.7556 52.6676 33.6281 52.7076 33.5056C52.7243 33.459 52.7393 33.4114 52.7526 33.3631C52.7701 33.3031 52.7876 33.2406 52.8026 33.1806C52.1389 32.5561 51.4173 31.9961 50.6476 31.5081V31.5081Z" fill="black"/>
<path d="M65.9176 47.7981C67.7951 49.1831 70.3001 50.0331 72.2676 50.0331C73.9226 50.0331 75.0401 49.5331 75.0401 48.2831C75.0401 47.0731 74.1901 46.5831 72.0001 46.1356C67.4826 45.3306 65.6026 43.5406 65.6026 39.9181C65.6026 35.5356 68.9126 33.5231 73.2051 33.5231C75.5776 33.5231 77.3201 34.0231 79.0651 35.0006V39.7856C77.1876 38.5356 75.4426 37.8631 73.3851 37.8631C71.5951 37.8631 70.8351 38.6131 70.8351 39.5606C70.8351 40.5906 71.5526 41.1256 73.4301 41.5606C78.5726 42.5006 80.3176 44.4681 80.3176 48.0456C80.3176 52.3831 77.0526 54.3506 72.4001 54.3506C69.9851 54.3506 67.5276 53.7706 65.9176 52.7406V47.7981Z" fill="black"/>
<path d="M107.1 41.4481C107.1 39.3456 106.163 38.2706 104.06 38.2706C102.63 38.2706 101.198 38.5856 100.31 39.0206C100.579 39.6721 100.716 40.3707 100.713 41.0756V53.9106H95.2951V41.4356C95.2951 39.3331 94.3101 38.2581 92.2526 38.2581C91.1163 38.2545 89.9859 38.4231 88.9001 38.7581V53.9181H83.5326V35.2756C86.4048 34.1621 89.4524 33.5695 92.5326 33.5256C94.8576 33.5256 96.8251 34.1081 98.0326 35.0906C99.8226 34.2856 101.878 33.5256 104.783 33.5256C109.533 33.5256 112.52 35.3606 112.52 41.2181V53.9181H107.1V41.4481Z" fill="black"/>
<path d="M126.423 40.8656C126.423 38.9431 124.813 38.1381 122.845 38.1381C120.805 38.1356 118.806 38.7093 117.078 39.7931V35.1406C118.865 34.1131 121.235 33.5306 123.785 33.5306C128.348 33.5306 131.745 35.3206 131.745 40.6431V53.5231C129.275 54.0439 126.757 54.3128 124.233 54.3256C119.178 54.3256 115.288 52.8056 115.288 48.2006C115.288 44.0406 118.643 42.0731 124.233 42.0731H126.423V40.8656ZM126.423 45.5156H124.635C122.135 45.5156 120.655 46.2331 120.655 47.9306C120.655 49.6281 122.04 50.3906 124.188 50.3906C124.939 50.3982 125.688 50.3236 126.423 50.1681V45.5156Z" fill="black"/>
<path d="M140.453 53.9231H135.088V35.5081C137.278 34.3456 140.14 33.6756 143.048 33.6756C144.453 33.6503 145.855 33.8314 147.208 34.2131V39.4006C145.91 38.8631 144.478 38.7281 143.183 38.7281C142.255 38.7353 141.334 38.8862 140.453 39.1756V53.9231Z" fill="black"/>
<path d="M150.05 33.9781H153.05V29.0581H158.418V33.9781H164.098V38.4506H158.413V46.4506C158.413 48.7306 159.485 49.4506 161.095 49.4506C162.4 49.4384 163.674 49.0495 164.763 48.3306V53.2581C163.333 54.0081 161.633 54.3756 159.62 54.3756C156.178 54.3756 153.045 52.7206 153.045 47.8931V38.4506H150.045L150.05 33.9781Z" fill="black"/>
<path d="M187.698 48.0656L191.408 33.9781H196.82L191.05 53.9231H185.05L181.473 40.9231L177.85 53.9231H171.955L166.185 33.9781H171.775L175.443 48.0656L179.25 33.9781H183.945L187.698 48.0656Z" fill="black"/>
<path d="M209.113 40.8656C209.113 38.9431 207.503 38.1381 205.535 38.1381C203.494 38.1356 201.494 38.7093 199.765 39.7931V35.1406C201.555 34.1131 203.925 33.5306 206.475 33.5306C211.035 33.5306 214.435 35.3206 214.435 40.6431V53.5231C211.964 54.0437 209.446 54.3126 206.92 54.3256C201.868 54.3256 197.978 52.8056 197.978 48.2006C197.978 44.0406 201.33 42.0731 206.92 42.0731H209.113V40.8656ZM209.113 45.5156H207.323C204.823 45.5156 203.343 46.2331 203.343 47.9306C203.343 49.6281 204.73 50.3906 206.878 50.3906C207.629 50.3981 208.378 50.3235 209.113 50.1681V45.5156Z" fill="black"/>
<path d="M227.12 48.2906L232.12 33.9781H237.755L226.843 61.9781H221.53L224.348 54.5556L216.165 33.9831H222.023L227.12 48.2906Z" fill="black"/>
</svg>

`;
const MediumLogo = () => {
    return (
        <SvgXml xml={mediumSvg} width="100%" height="100%" />
    );
};

interface Props {
    size?: 'small' | 'medium';
}

const Logo = ({ size = 'medium' }: Props) => {
    if (size === 'small') {
        return <SmallLogo />;
    } else {
        return <MediumLogo />;
    }
};

export default Logo;