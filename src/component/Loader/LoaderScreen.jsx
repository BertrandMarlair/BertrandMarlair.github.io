import React, { Fragment, useState } from 'react'
import Helmet from 'react-helmet'

const LoaderScreen = () => {
    
    const [ display, setDisplay ] = useState(true)
    const [ loadDisplay, setLoadDisplay ] = useState(true)

    if(loadDisplay && display){
        setLoadDisplay(false)
        setTimeout(()=>{
            setDisplay(false)
        }, 3000)
    }

    if(display){
        return (
            <div className="bodyContainer">
                <svg id="logo_becode" viewBox="0 0 2000 2000">
                    <defs>
                    <clipPath id="_clipPath_Q0oZ1U94wyl2W9Qim0BXZ0WxPKfWUCY1">
                        <rect width="2000" height="2000"/>
                    </clipPath>
                    </defs>
                    <path className="logo_be" d=" M 391.714 259.702 C 391.39 260.569 391.265 441.776 391.44 662.39 L 391.758 1063.505 L 451.021 1063.505 L 510.283 1063.505 L 510.614 1021.398 C 510.864 988.947 511.294 979.296 512.486 979.309 C 513.334 979.321 520.202 985.31 527.75 992.615 C 567.668 1031.254 615.335 1058.845 655.646 1066.656 C 680.137 1071.397 684.697 1071.852 708.658 1071.914 C 738.271 1071.989 753.991 1069.85 783.516 1061.709 C 838.699 1046.5 902.528 996.513 936.314 942.048 C 979.994 871.619 993.138 769.437 969.876 681.104 C 942.833 578.386 855.536 499.467 749.83 482.162 C 653.481 466.386 579.964 495.793 523.053 572.872 C 518.112 579.565 513.359 585.036 512.492 585.036 C 511.232 585.036 510.851 552.392 510.602 421.908 L 510.283 258.779 L 451.295 258.454 C 404.777 258.199 392.188 258.461 391.714 259.702 Z  M 1290.681 479.692 C 1276.589 481.17 1270.744 482.031 1256.995 484.664 C 1147.945 505.537 1056.643 597.743 1036.855 706.987 C 1008.615 862.91 1074.141 995.74 1206.465 1050.779 C 1286.664 1084.141 1402.276 1078.377 1483.441 1036.974 C 1513.808 1021.479 1565.155 982.527 1563.658 976.115 C 1563.458 975.241 1549.254 959.246 1532.099 940.569 C 1514.944 921.898 1500.459 905.841 1499.91 904.899 C 1498.101 901.787 1496.042 903.09 1483.391 915.361 C 1435.981 961.355 1358.671 980.113 1281.542 964.343 C 1230.651 953.938 1177.894 914.076 1161.6 873.721 C 1154.164 855.3 1149.43 832.281 1152.355 828.756 C 1153.509 827.359 1191.687 827.078 1378.789 827.078 L 1603.838 827.078 L 1603.826 772.494 C 1603.813 698.977 1600.744 676.301 1585.691 638.479 C 1543.297 531.993 1420.791 466.055 1290.681 479.692 Z  M 1363.942 584.319 C 1437.865 600.588 1483.872 654.268 1484.04 724.466 L 1484.065 733.511 L 1317.817 733.199 L 1151.569 732.881 L 1151.881 721.029 C 1153.597 656.694 1207.9 600.9 1284.143 585.148 C 1305.11 580.813 1346.089 580.389 1363.942 584.319 Z  M 703.093 584.35 C 812.48 598.211 882.167 709.345 855.38 827.228 C 830.752 935.616 705.95 997.312 608.847 949.103 C 559.846 924.774 524.762 878.25 513.546 822.711 C 486.185 687.28 580.394 568.811 703.093 584.35 Z " fillRule="evenodd" fill="rgb(255,255,255)"/>
                    <path className="logo_tag" d=" M 514.937 1325.197 C 514.245 1326.058 511.306 1331.81 508.412 1337.986 C 505.511 1344.162 500.402 1354.966 497.046 1362.003 C 493.69 1369.039 488.2 1380.549 484.844 1387.579 C 481.488 1394.616 476.373 1405.421 473.478 1411.596 C 470.584 1417.772 465.531 1428.44 462.249 1435.302 C 458.974 1442.163 453.634 1453.392 450.391 1460.254 C 447.14 1467.116 442.094 1477.784 439.168 1483.959 C 436.242 1490.135 431.258 1500.665 428.089 1507.353 C 424.92 1514.04 419.736 1524.994 416.573 1531.682 C 413.404 1538.375 408.133 1549.46 404.858 1556.322 C 401.577 1563.184 396.524 1573.852 393.629 1580.027 C 390.735 1586.203 385.551 1597.151 382.114 1604.356 C 366.281 1637.544 363.636 1643.108 358.695 1653.638 C 355.801 1659.814 350.748 1670.481 347.467 1677.343 C 344.192 1684.205 338.92 1695.297 335.751 1701.984 C 332.589 1708.678 327.436 1719.545 324.304 1726.138 C 316.332 1742.932 313.387 1741.597 358.415 1741.597 C 403.454 1741.597 398.707 1743.281 407.721 1724.13 C 411.439 1716.238 416.461 1705.571 418.881 1700.425 C 430.678 1675.347 433.94 1668.41 438.694 1658.317 C 441.52 1652.316 445.943 1642.909 448.525 1637.419 C 451.108 1631.929 455.468 1622.665 458.213 1616.833 C 460.958 1611 465.45 1601.456 468.194 1595.623 C 470.939 1589.79 475.431 1580.246 478.175 1574.413 C 480.92 1568.58 485.474 1558.893 488.3 1552.891 C 491.126 1546.89 495.686 1537.202 498.431 1531.37 C 501.176 1525.537 505.667 1515.993 508.412 1510.16 C 511.157 1504.327 515.648 1494.783 518.393 1488.95 C 521.138 1483.117 525.692 1473.436 528.511 1467.428 C 531.331 1461.421 536.035 1451.458 538.973 1445.283 C 544.094 1434.503 549.11 1423.867 559.852 1400.992 C 562.591 1395.159 566.97 1385.895 569.577 1380.405 C 572.191 1374.916 577.494 1363.687 581.361 1355.453 C 585.229 1347.218 589.995 1337.119 591.96 1333.008 C 593.919 1328.897 595.26 1325.11 594.936 1324.586 C 593.863 1322.852 516.366 1323.438 514.937 1325.197 Z  M 582.584 1332.272 C 582.977 1332.902 580.282 1339.782 576.602 1347.555 C 569.721 1362.084 565.011 1372.077 555.835 1391.634 C 552.934 1397.81 548.162 1407.916 545.223 1414.092 C 542.292 1420.268 537.582 1430.23 534.756 1436.237 C 531.93 1442.245 527.314 1452.063 524.488 1458.071 C 521.662 1464.078 516.952 1474.041 514.02 1480.216 C 511.082 1486.392 506.378 1496.361 503.559 1502.362 C 500.739 1508.369 496.185 1518.051 493.44 1523.884 C 490.695 1529.716 486.273 1539.124 483.609 1544.782 C 480.945 1550.44 476.454 1559.99 473.628 1565.992 C 470.802 1571.999 466.173 1581.824 463.347 1587.825 C 460.521 1593.833 456.03 1603.377 453.366 1609.035 C 450.702 1614.693 446.211 1624.244 443.385 1630.245 C 440.559 1636.252 436.136 1645.653 433.554 1651.143 C 430.971 1656.632 426.48 1666.177 423.573 1672.353 C 420.672 1678.529 416.311 1687.792 413.891 1692.939 C 411.477 1698.085 406.23 1709.177 402.232 1717.58 L 394.977 1732.863 L 363.112 1732.863 C 336.606 1732.863 331.247 1732.57 331.247 1731.116 C 331.247 1730.15 334.816 1721.872 339.182 1712.714 C 346.83 1696.657 351.341 1687.156 363.355 1661.748 C 366.437 1655.229 371.64 1644.281 374.915 1637.419 C 378.196 1630.557 383.249 1619.89 386.143 1613.714 C 389.038 1607.538 394.153 1596.733 397.509 1589.697 C 400.866 1582.66 406.355 1571.157 409.711 1564.12 C 413.067 1557.09 418.183 1546.279 421.077 1540.103 C 423.972 1533.927 429.025 1523.26 432.306 1516.398 C 435.581 1509.536 440.784 1498.588 443.872 1492.069 C 446.953 1485.55 452.069 1474.739 455.238 1468.052 C 458.407 1461.359 463.528 1450.554 466.616 1444.035 C 469.704 1437.516 474.819 1426.705 477.982 1420.018 C 481.151 1413.331 486.422 1402.239 489.697 1395.377 C 492.979 1388.515 498.032 1377.848 500.926 1371.672 C 512.629 1346.719 518.755 1334.162 519.946 1332.683 C 521.456 1330.793 581.43 1330.4 582.584 1332.272 Z  M 268.242 1396.606 C 263.438 1398.945 253.052 1403.892 245.16 1407.604 C 237.269 1411.316 226.602 1416.337 221.455 1418.758 C 216.309 1421.178 207.326 1425.402 201.493 1428.146 C 195.66 1430.891 186.116 1435.383 180.283 1438.128 C 174.45 1440.872 164.625 1445.489 158.449 1448.389 C 152.274 1451.29 142.168 1456.062 135.992 1459 C 125.506 1463.985 118.531 1467.272 91.701 1479.886 C 85.868 1482.624 76.043 1487.272 69.867 1490.204 C 63.691 1493.136 54.284 1497.59 48.969 1500.098 L 39.3 1504.658 L 39.3 1539.91 L 39.3 1575.168 L 50.217 1580.327 C 60.66 1585.268 79.087 1593.951 99.187 1603.408 C 110.939 1608.935 127.857 1616.895 141.606 1623.364 C 147.439 1626.109 156.84 1630.538 162.504 1633.202 C 168.169 1635.866 177.57 1640.288 183.402 1643.033 C 189.235 1645.778 198.636 1650.201 204.3 1652.865 C 209.964 1655.528 219.646 1660.089 225.822 1662.996 C 231.998 1665.902 241.823 1670.519 247.656 1673.251 C 253.488 1675.983 262.871 1680.456 268.504 1683.189 C 274.137 1685.921 279.327 1687.798 280.044 1687.356 C 280.899 1686.832 281.342 1673.731 281.342 1649.14 L 281.342 1611.724 L 278.042 1608.661 C 276.227 1606.983 274.274 1605.604 273.706 1605.604 C 273.145 1605.604 265.222 1602.036 256.115 1597.675 C 247.001 1593.309 235.616 1587.894 230.813 1585.642 C 226.009 1583.384 215.342 1578.331 207.107 1574.413 C 198.873 1570.496 188.206 1565.443 183.402 1563.184 C 178.599 1560.932 167.37 1555.605 158.449 1551.357 C 149.529 1547.109 140.402 1542.842 138.175 1541.875 C 131.619 1539.03 133.004 1537.963 158.449 1526.298 C 163.939 1523.784 171.799 1520.166 175.916 1518.257 C 180.034 1516.348 186.627 1513.335 190.57 1511.557 C 194.519 1509.779 201.817 1506.411 206.789 1504.078 C 211.767 1501.738 219.072 1498.363 223.015 1496.573 C 233.389 1491.863 242.996 1487.446 255.765 1481.514 C 261.941 1478.638 269.932 1474.97 273.525 1473.361 C 281.816 1469.643 281.529 1471.377 281.08 1427.834 C 280.662 1387.667 281.654 1390.075 268.242 1396.606 Z  M 272.321 1434.89 L 271.985 1465.045 L 265.696 1468.264 C 262.24 1470.036 255.784 1473.117 251.349 1475.114 C 246.92 1477.104 239.078 1480.678 233.932 1483.055 C 223.72 1487.765 213.439 1492.506 200.869 1498.307 C 196.409 1500.366 189.11 1503.735 184.65 1505.793 C 180.19 1507.852 172.891 1511.22 168.431 1513.279 C 163.97 1515.337 156.672 1518.706 152.211 1520.765 C 147.751 1522.823 140.596 1526.136 136.304 1528.12 C 132.018 1530.11 125.874 1532.917 122.655 1534.358 C 113.915 1538.269 114.221 1538.955 127.508 1545.218 C 134.233 1548.394 145.349 1553.671 152.211 1556.946 C 159.073 1560.228 169.741 1565.281 175.916 1568.175 C 182.092 1571.069 192.76 1576.122 199.622 1579.404 C 206.484 1582.679 216.589 1587.464 222.079 1590.04 C 250.176 1603.221 266.058 1610.819 268.865 1612.41 L 271.985 1614.182 L 272.315 1644.824 C 272.527 1663.788 272.197 1675.472 271.454 1675.472 C 270.799 1675.472 263.912 1672.465 256.152 1668.791 C 248.392 1665.116 237.83 1660.126 232.684 1657.705 C 227.537 1655.285 218.274 1650.925 212.098 1648.024 C 205.922 1645.117 196.24 1640.557 190.576 1637.893 C 184.912 1635.229 175.654 1630.875 169.99 1628.211 C 164.326 1625.548 154.644 1620.988 148.468 1618.08 C 142.293 1615.18 133.029 1610.819 127.882 1608.399 C 122.736 1605.978 112.349 1601.088 104.801 1597.532 C 97.253 1593.976 86.361 1588.861 80.597 1586.172 C 74.827 1583.477 65.001 1578.749 58.763 1575.661 L 47.41 1570.046 L 47.073 1539.86 L 46.742 1509.673 L 56.43 1505.101 C 61.764 1502.587 71.177 1498.126 77.353 1495.194 C 83.529 1492.262 93.635 1487.484 99.81 1484.577 C 105.986 1481.67 116.092 1476.898 122.268 1473.972 C 128.444 1471.046 138.55 1466.28 144.725 1463.373 C 150.901 1460.466 160.589 1455.906 166.247 1453.242 C 171.912 1450.579 181.312 1446.156 187.145 1443.411 C 197.014 1438.764 205.292 1434.871 228.941 1423.748 C 234.088 1421.328 244.474 1416.425 252.022 1412.856 C 259.571 1409.295 266.589 1406.051 267.618 1405.651 C 272.689 1403.699 272.665 1403.537 272.321 1434.89 Z " fillRule="evenodd" fill="rgb(97,194,208)"/>
                    <g className="logo_code_content">
                        <path className="logo_code_txt" d=" M 700.548 1407.86 C 694.715 1408.696 687.417 1410.062 684.329 1410.904 C 681.241 1411.74 677.161 1412.725 675.271 1413.087 C 673.375 1413.455 671.516 1414.254 671.141 1414.859 C 670.767 1415.464 669.619 1415.963 668.596 1415.963 C 656.457 1415.963 619.003 1444.896 605.79 1464.471 C 575.229 1509.779 577.724 1580.963 611.28 1621.062 C 626.881 1639.708 643.749 1651.96 667.486 1661.891 C 713.205 1681.03 781.869 1664.873 818.132 1626.452 C 822.305 1622.029 822.817 1622.959 806.597 1605.604 C 799.392 1597.894 793.31 1591.094 793.079 1590.489 C 792.156 1588.037 788.207 1589.703 782.892 1594.787 C 757.771 1618.817 726.798 1626.059 693.299 1615.741 C 645.546 1601.032 622.646 1535.094 650.749 1493.242 C 679.906 1449.812 738.451 1444.678 783.235 1481.62 C 787.945 1485.5 788.563 1485.082 800.696 1469.849 C 806.535 1462.513 813.048 1454.546 815.175 1452.145 C 820.053 1446.624 820.084 1446.867 813.771 1440.816 C 803.846 1431.29 790.759 1423.262 771.04 1414.597 C 755.182 1407.629 723.361 1404.585 700.548 1407.86 Z " fillRule="evenodd" fill="rgb(97,194,208)"/>
                        <path className="logo_code_txt" d=" M 948.204 1407.367 C 877.781 1417.579 832.236 1468.975 832.236 1538.232 C 832.236 1625.691 909.022 1685.091 998.11 1666.557 C 1098.788 1645.61 1135.637 1517.72 1062.064 1444.603 C 1032.85 1415.576 989.47 1401.384 948.204 1407.367 Z  M 980.019 1455.881 C 1063.573 1468.414 1071.696 1592.098 990.674 1618.168 C 980.581 1621.418 954.499 1622.148 945.69 1619.428 C 916.745 1610.495 897.507 1592.629 890.002 1567.713 C 870.414 1502.724 915.866 1446.256 980.019 1455.881 Z " fillRule="evenodd" fill="rgb(97,194,208)"/>
                        <path className="logo_code_txt" d=" M 1330.187 1309.496 C 1329.732 1309.958 1329.358 1341.117 1329.358 1378.74 C 1329.358 1416.369 1329.002 1447.154 1328.565 1447.154 C 1328.135 1447.154 1324.467 1443.536 1320.412 1439.119 C 1308.123 1425.701 1290.538 1414.192 1277.001 1410.698 C 1228.368 1398.147 1181.775 1413.53 1147.914 1453.317 C 1144.408 1457.441 1134.726 1472.6 1134.726 1473.972 C 1134.726 1474.334 1133.641 1477.01 1132.318 1479.917 C 1117.047 1513.441 1118.126 1565.592 1134.839 1601.237 C 1147.128 1627.45 1178.955 1656.308 1203.484 1663.488 C 1250.264 1677.169 1290.344 1668.76 1319.208 1639.203 C 1329.975 1628.174 1329.358 1627.637 1329.358 1648.049 L 1329.358 1665.541 L 1355.87 1665.204 L 1382.382 1664.867 L 1382.7 1488.457 C 1382.931 1359.121 1382.638 1311.598 1381.609 1310.357 C 1380.118 1308.56 1331.934 1307.755 1330.187 1309.496 Z  M 1265.978 1454.721 C 1289.982 1459.537 1307.867 1473.23 1319.651 1495.812 C 1323.631 1503.441 1324.704 1506.423 1328.01 1519.037 C 1330.911 1530.103 1329.252 1558.15 1324.991 1570.046 C 1303.232 1630.794 1224.968 1640.476 1188.867 1586.89 C 1174.382 1565.393 1171.089 1530.571 1181.201 1505.793 C 1184.245 1498.326 1185.443 1496.055 1189.753 1489.574 C 1207.451 1462.949 1237.819 1449.069 1265.978 1454.721 Z " fillRule="evenodd" fill="rgb(97,194,208)"/>
                        <path className="logo_code_txt" d=" M 1517.751 1407.317 C 1466.648 1415.084 1427.091 1447.017 1412.407 1492.368 C 1406.817 1509.636 1404.522 1548.444 1408.059 1565.898 C 1415.002 1600.146 1427.934 1622.048 1453.155 1642.297 C 1503.528 1682.727 1588.268 1678.267 1637.212 1632.603 C 1642.665 1627.513 1642.378 1626.24 1633.657 1616.833 C 1629.521 1612.372 1623.283 1605.498 1619.795 1601.549 C 1612.179 1592.941 1613.008 1593.028 1605.554 1600.077 C 1560.526 1642.603 1464.065 1621.58 1461.302 1568.63 L 1460.984 1562.561 L 1560.171 1561.937 L 1659.358 1561.313 L 1659.233 1531.37 C 1659.09 1495.369 1657.917 1489.181 1647.2 1467.74 C 1635.927 1445.189 1615.366 1427.753 1584.5 1414.566 C 1569.597 1408.197 1535.979 1404.547 1517.751 1407.317 Z  M 1556.677 1455.114 C 1575.56 1460.036 1591.68 1471.988 1598.517 1486.13 C 1603.389 1496.211 1606.957 1510.06 1606.152 1515.774 L 1605.71 1518.893 L 1533.347 1518.893 L 1460.984 1518.893 L 1461.214 1510.933 C 1461.876 1487.871 1481.988 1465.288 1509.018 1457.254 C 1512.106 1456.337 1516.036 1455.133 1517.751 1454.59 C 1523.047 1452.893 1549.535 1453.255 1556.677 1455.114 Z " fillRule="evenodd" fill="rgb(97,194,208)"/>
                        <path d=" M 1718.621 1430.816 L 1718.621 1469.643 L 1731.409 1475.694 C 1738.446 1479.025 1747.005 1483.011 1750.436 1484.546 C 1753.867 1486.08 1760.186 1488.962 1764.471 1490.952 C 1768.763 1492.936 1775.919 1496.249 1780.379 1498.307 C 1784.839 1500.366 1792.138 1503.735 1796.598 1505.793 C 1801.059 1507.852 1808.357 1511.22 1812.817 1513.279 C 1833.323 1522.742 1837.14 1524.501 1846.504 1528.787 C 1864.245 1536.909 1870.084 1540.727 1864.763 1540.727 C 1864.052 1540.727 1856.285 1544.152 1847.502 1548.338 C 1838.718 1552.53 1826.76 1558.206 1820.927 1560.964 C 1815.095 1563.715 1805.132 1568.431 1798.782 1571.438 C 1782.02 1579.379 1765.164 1587.364 1751.995 1593.602 C 1745.645 1596.609 1735.545 1601.406 1729.538 1604.263 L 1718.621 1609.465 L 1718.621 1648.71 C 1718.621 1672.415 1719.089 1687.948 1719.794 1687.948 C 1720.442 1687.948 1727.317 1684.941 1735.077 1681.267 C 1742.838 1677.593 1753.399 1672.602 1758.545 1670.182 C 1795.282 1652.902 1807.109 1647.338 1821.551 1640.538 C 1843.179 1630.357 1853.453 1625.523 1864.283 1620.438 C 1870.29 1617.619 1880.252 1612.915 1886.428 1609.977 C 1892.604 1607.045 1901.868 1602.666 1907.014 1600.258 C 1936.29 1586.54 1949.415 1580.289 1954.424 1577.67 L 1960.039 1574.738 L 1960.369 1540.365 L 1960.7 1505.993 L 1957.057 1503.398 C 1955.054 1501.969 1953.114 1500.803 1952.746 1500.803 C 1952.378 1500.803 1945.728 1497.796 1937.968 1494.121 C 1930.208 1490.447 1919.646 1485.457 1914.5 1483.036 C 1909.353 1480.616 1900.09 1476.255 1893.914 1473.354 C 1887.738 1470.448 1877.913 1465.831 1872.08 1463.093 C 1866.248 1460.354 1856.423 1455.713 1850.247 1452.775 C 1844.071 1449.843 1833.965 1445.064 1827.789 1442.157 C 1821.613 1439.25 1811.507 1434.478 1805.332 1431.552 C 1799.156 1428.627 1789.05 1423.861 1782.874 1420.954 C 1776.698 1418.047 1767.435 1413.692 1762.288 1411.272 C 1757.142 1408.852 1746.593 1403.867 1738.845 1400.199 C 1731.097 1396.531 1723.38 1393.181 1721.69 1392.757 L 1718.621 1391.99 L 1718.621 1430.816 Z  M 1735.464 1407.248 C 1738.895 1408.795 1746.755 1412.445 1752.931 1415.364 C 1759.107 1418.278 1768.932 1422.906 1774.764 1425.651 C 1780.597 1428.396 1790.285 1432.95 1796.286 1435.776 C 1802.294 1438.602 1812.119 1443.23 1818.12 1446.05 C 1824.127 1448.876 1834.09 1453.579 1840.265 1456.505 C 1846.441 1459.431 1856.547 1464.203 1862.723 1467.11 C 1868.899 1470.017 1879.005 1474.796 1885.181 1477.727 C 1891.356 1480.659 1900.901 1485.17 1906.39 1487.746 C 1911.88 1490.322 1922.722 1495.438 1930.482 1499.112 C 1938.243 1502.786 1944.892 1505.793 1945.261 1505.793 C 1945.629 1505.793 1947.569 1506.96 1949.577 1508.388 L 1953.221 1510.983 L 1952.89 1540.409 L 1952.553 1569.828 L 1944.443 1573.939 C 1939.983 1576.197 1930.856 1580.601 1924.169 1583.721 C 1917.482 1586.833 1906.814 1591.843 1900.464 1594.856 C 1894.12 1597.863 1884.151 1602.566 1878.318 1605.311 C 1872.486 1608.056 1862.804 1612.61 1856.797 1615.435 C 1850.796 1618.261 1841.108 1622.822 1835.275 1625.566 C 1829.442 1628.311 1819.898 1632.803 1814.065 1635.547 C 1808.232 1638.292 1798.688 1642.784 1792.855 1645.528 C 1771.015 1655.803 1761.359 1660.35 1750.436 1665.484 C 1744.26 1668.385 1736.999 1671.822 1734.291 1673.12 C 1725.689 1677.244 1726.107 1678.672 1726.107 1644.967 L 1726.107 1614.456 L 1737.023 1609.253 C 1743.031 1606.396 1752.993 1601.662 1759.169 1598.742 C 1772.226 1592.56 1790.634 1583.839 1806.579 1576.285 C 1812.755 1573.359 1822.58 1568.705 1828.413 1565.954 C 1834.246 1563.197 1846.317 1557.489 1855.237 1553.26 C 1864.158 1549.036 1874.114 1544.351 1877.358 1542.842 C 1883.814 1539.847 1884.856 1537.52 1880.502 1535.83 C 1877.876 1534.813 1871.194 1531.788 1852.43 1523.117 C 1848.144 1521.139 1840.983 1517.833 1836.523 1515.774 C 1832.062 1513.716 1824.764 1510.347 1820.303 1508.288 C 1815.843 1506.23 1808.544 1502.861 1804.084 1500.803 C 1799.624 1498.744 1792.325 1495.375 1787.865 1493.317 C 1783.404 1491.258 1776.106 1487.889 1771.645 1485.831 C 1767.185 1483.772 1760.03 1480.472 1755.738 1478.488 C 1751.452 1476.511 1743.031 1472.587 1737.023 1469.768 L 1726.107 1464.646 L 1726.107 1434.896 C 1726.107 1407.28 1726.443 1402.825 1728.465 1403.998 C 1728.883 1404.242 1732.033 1405.701 1735.464 1407.248 Z " fillRule="evenodd" fill="rgb(97,194,208)"/>
                    </g>
                </svg>
                <Helmet>
                    <style type="text/css">
                        {`
                            @keyframes fadeFromTop {
                                0% { 
                                    opacity: 0;
                                    transform: translateY(-100px);
                                }
                                100% {
                                    opacity: 1;
                                    transform: translateY(0);
                                }
                            }
                            @keyframes fadeBlink {
                                    0% {opacity: 0;}
                                    50% {opacity: 1;}
                                    75% {opacity: 1;}
                                    100% {opacity: 0;}
                            }
                            @keyframes slideFromRight {
                                0% {transform: translateX(1300px);}
                                100% {transform: translateX(0);}
                            }
                            @keyframes fadeIn { 
                                0% {opacity: 0;}
                                100% {opacity: 1;}
                            }
                            @keyframes fadeOut { 
                                0% {opacity: 1;}
                                100% {opacity: 0;}
                            }
                            @keyframes fadeBlinkPop {
                                0% {opacity: 0;}
                                50% {opacity: 1;}
                                70% {transform: translateY(0);}
                                75% {opacity: 1;}
                                90% {transform: translateY(-20px);}
                                95% {transform: translateY(0);}
                                100% {opacity: 0;}
                            }
                            @keyframes textPop {
                                    70% {transform: translateY(0);}
                                    90% {transform: translateY(-20px);}
                                    95% {transform: translateY(0);}
                            }
                            .logo_be {
                                animation: fadeFromTop 1s forwards normal ease-out;
                                transition: 1s ease-out;
                            }
                            .logo_tag {
                                transform: translateX(1300px);
                                animation: slideFromRight .5s forwards normal ease-in-out;
                                animation-delay: 1s;
                                transition: 1s ease-in-out;
                            }
                            .logo_code_content {
                                opacity: 0;
                                animation: fadeIn .5s forwards normal ease-in-out;
                                animation-delay: 1.3s;
                                transition: 1s ease-in-out;
                            }
                            .logo_code_txt {
                                animation: fadeBlinkPop 2s infinite cubic-bezier(.68,-0.55,.27,1.55);
                                 transition: 2s cubic-bezier(.68,-0.55,.27,1.55);
                            }
                            .logo_code_txt:nth-child(1) {animation-delay: .2s;}
                            .logo_code_txt:nth-child(2) {animation-delay: .4s;}
                            .logo_code_txt:nth-child(3) {animation-delay: .6s;}
                            .logo_code_txt:nth-child(4) {animation-delay: .8s;}
                            .bodyContainer {
                                background: #111f27;
                                position: fixed;
                                width: 100%;
                                height: 100%;
                                top: 0;
                                left: 0;
                                z-index: 5;
                                display: flex;
                                opacity: 1;
                                animation: fadeOut .5s forwards normal ease-in-out;
                                animation-delay: 2.5s;
                            }
                            #logo_becode {
                                display: block;
                                height: 300px;
                                margin: auto;
                                border-radius: 3px;
                            }
                        `}
                    </style>
                </Helmet>
            </div>
        )
    }else{
        return <Fragment></Fragment>
    }
}

export default LoaderScreen