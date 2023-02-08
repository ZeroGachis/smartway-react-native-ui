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

export const SmallLogo = () => {
    return (
        <SvgXml xml={smallSvg} />
    );
};