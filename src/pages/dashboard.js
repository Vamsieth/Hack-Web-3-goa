// Dashboard.js
import styles from '@/styles/dashboard.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';
import SignNav from '@/signNav';
import { MdSpaceDashboard } from 'react-icons/md'
import { BiSolidWalletAlt } from 'react-icons/bi'
import { BiSolidMessageSquareDetail } from 'react-icons/bi'
import { BiTransfer } from 'react-icons/bi'
import { MdManageAccounts } from 'react-icons/md'
import { BsCurrencyBitcoin } from 'react-icons/bs'
import { FaEthereum } from 'react-icons/fa'
import { SiLitecoin } from 'react-icons/si'
import bitline from '@/img/bitline.png'
import Image from 'next/image';
import pink from '@/img/pink.png'
import blue from '@/img/blue.png'
import yellow from '@/img/yellow.png'
import svg from '@/green.svg'
import svgg from '@/pink.svg'
import svggg from '@/yellow.svg'
import shade from  '@/shade.svg'
import yellowtop from '@/img/yellowtop.png'
import bluetop from '@/img/bluetop.png'
import pinktop from '@/img/pinktop.png'
import pinkdown from '@/img/pinkdown.png'
import bluedown from '@/img/bluedown.png'
import pinkpath from '@/img/pinkpath.png'
import yellowpath from '@/img/yellowpath.png'
import bluepath from '@/img/greenpath.png'

export default function Dashboard () {
  return (
    <div className={styles.dashboard}>
      <SignNav />
      <div className={styles.dashboardd}>
        <div className={styles.sidebar}>
          <div className={styles.side}>
            <MdSpaceDashboard className={styles.icon} />
            <p className={styles.para}>Dashboard</p>
          </div>
          <div className={styles.side}>
            <BiSolidWalletAlt className={styles.icon} />
            <p className={styles.para}>Wallet</p>
          </div>
          <div className={styles.side}>
            <BiSolidMessageSquareDetail className={styles.icon} />
            <p className={styles.para}>Messages</p>
          </div>
          <div className={styles.side}>
            <BiTransfer className={styles.icon} />
            <p className={styles.para}>Trade</p>
          </div>
          <div className={styles.side}>
            <MdManageAccounts className={styles.icon} />
            <p className={styles.para}>Account setting</p>
          </div>
        </div>
        <div className={styles.rightside}>
          <div className={styles.wallet}>
            <p className={styles.p}>WALLETS</p>
            <div className={styles.boxes}>
              <div className={styles.box}>
                <BsCurrencyBitcoin className={styles.ic} />
                <div className={styles.bigside}>
                  <div className={styles.smallside}>
                    <p className={styles.p}>1.9678</p>
                    <p className={styles.pp}>BTC</p>
                  </div>
                  <div className={styles.smallside}>
                    <Image src={bitline} className={styles.p} />
                    <p className={styles.pp}>+12.5%</p>
                  </div>
                </div>
              </div>
              <div className={styles.boxx}>
                <FaEthereum className={styles.ic} />
                <div className={styles.bigside}>
                  <div className={styles.smallside}>
                    <p className={styles.p}>22.234</p>
                    <p className={styles.pp}>ETH</p>
                  </div>
                  <div className={styles.smallside}>
                    <Image src={pinkdown} className={styles.p} />
                    <p className={styles.ppp}>-5.23%</p>
                  </div>
                </div>
              </div>
              <div className={styles.boxx}>
                <SiLitecoin className={styles.ic} />
                <div className={styles.bigside}>
                  <div className={styles.smallside}>
                    <p className={styles.p}>380.234</p>
                    <p className={styles.pp}>LTC</p>
                  </div>
                  <div className={styles.smallside}>
                    <Image src={bluedown} className={styles.p} />
                    <p className={styles.pppp} style={{color : 'green'}}>+39.69%</p>
                  </div>
                </div>
              </div>
              <div className={styles.boxxx}>
                <p>+Add Currency</p>
              </div>
            </div>
          </div>
          <div className={styles.graph}>
            <div className={styles.leftnum}>
               <div className={styles.yaxis}>
                  <p className={styles.num}>6,500</p>
                  <p className={styles.num}>6,500</p>
                  <p className={styles.num}>6,500</p>
                  <p className={styles.num}>6,500</p>
                  <p className={styles.num}>6,500</p>
                  <p className={styles.num}>6,500</p>
                  <p className={styles.num}>6,500</p>
                  <p className={styles.num}>6,500</p>
                  <p className={styles.num}>6,500</p>
                  <p className={styles.num}>6,500</p>                 
               </div>
               <div className={styles.btc}>
                <div className={styles.ball}>
                  <Image className={styles.balll} src={pink} />
                  <p className={styles.num}>BTC</p>
                </div>
                <div className={styles.ball}>
                  <Image className={styles.balll} src={blue} />
                  <p className={styles.num}>ETH</p>
                </div>
                <div className={styles.ball}>
                  <Image className={styles.balll} src={yellow} />
                  <p className={styles.num}>LTC</p>
                </div>
               </div>
            </div>
            <div className={styles.rightnum}>
              <div className={styles.xaxis}>
                  <p className={styles.numm}>6,500</p>
                  <p className={styles.numm}>6,500</p>
                  <p className={styles.numm}>6,500</p>
                  <p className={styles.numm}>6,500</p>
                  <p className={styles.numm}>6,500</p>
                  <p className={styles.numm}>6,500</p>
                  <p className={styles.numm}>6,500</p>
                  <p className={styles.numm}>6,500</p>
                  <p className={styles.numm}>6,500</p>
                  <p className={styles.numm}>6,500</p>
              </div>
            </div>
            <Image src={svg} className={styles.greenline} />
            <Image src={svgg} className={styles.pinkline} />
            <Image src={svggg} className={styles.yellowline} />
            <Image src={shade} className={styles.shadeline} />
            <Image src={yellowtop} className={styles.yellowtop} />
            <Image src={pinktop} className={styles.pinktop} />
            <Image src={bluetop} className={styles.bluetop} />
            <div className={styles.pinkshade}></div>
                <div className={styles.ltc}>
                  <p className={styles.n}>$6.987</p>
                  <Image src={yellow} className={styles.b} />
                </div>
                <div className={styles.eth}>
                  <Image src={blue} className={styles.b} />
                  <p className={styles.n}>$6.987</p>
                </div>
                <div className={styles.bit}>
                  <Image src={pink} className={styles.b} />
                  <p className={styles.n}>$6.987</p>
                </div>               
          </div>
          <div className={styles.trend}>
             <p className={styles.trendd}>Trend</p>
             <div className={styles.dwn}>             
               <div className={styles.downbox}>
                  <div className={styles.downt}>
                      <p className={styles.dp}>BTC</p>
                      <p className={styles.dp}>USD</p>
                      <p className={styles.ratee}>-5.23%</p>
                  </div>
                  <h4 className={styles.dh}>7.356,67</h4>
                  <Image src={pinkpath} className={styles.pinkdown} />
               </div>
               <div className={styles.downbox}>
                  <div className={styles.downt}>
                      <p className={styles.dp}>ETH</p>
                      <p className={styles.dp}>USD</p>
                      <p className={styles.rate}>+132%</p>
                  </div>
                  <h4 className={styles.dh}>465,22</h4>
                  <Image src={bluepath} className={styles.pinkdown} />
               </div>
               <div className={styles.downbox}>
                  <div className={styles.downt}>
                      <p className={styles.dp}>LTC</p>
                      <p className={styles.dp}>USD</p>
                      <p className={styles.rate}>+79.65%</p>
                  </div>
                  <h4 className={styles.dh}>104,23</h4>
                  <Image src={yellowpath} className={styles.pinkdown} />
               </div>
               <div className={styles.history}>
                  <div className={styles.tophis}>                 
                    <p className={styles.histo}>HISTORY</p>
                    <p className={styles.seeall}>See All</p>
                  </div>
                  <div className={styles.his}>
                     <div className={styles.dislogo}>
                        <BsCurrencyBitcoin className={styles.disbit} />
                        <p>Pranav</p>
                     </div>
                     <div className={styles.disdate}>
                       <p className={styles.rate}>+0.025</p>
                       <p>2/2/23</p>
                     </div>
                  </div>
                  <div className={styles.his}>
                     <div className={styles.dislogo}>
                        <BsCurrencyBitcoin className={styles.disbit} />
                        <p>Pranav</p>
                     </div>
                     <div className={styles.disdate}>
                       <p className={styles.rate}>+0.025</p>
                       <p>2/2/23</p>
                     </div>
                  </div>
                  <div className={styles.his}>
                     <div className={styles.dislogo}>
                        <BsCurrencyBitcoin className={styles.disbit} />
                        <p>Pranav</p>
                     </div>
                     <div className={styles.disdate}>
                       <p className={styles.rate}>+0.025</p>
                       <p>2/2/23</p>
                     </div>
                  </div>
                  <div className={styles.his}>
                     <div className={styles.dislogo}>
                        <BsCurrencyBitcoin className={styles.disbit} />
                        <p>Pranav</p>
                     </div>
                     <div className={styles.disdate}>
                       <p className={styles.rate}>+0.025</p>
                       <p>2/2/23</p>
                     </div>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
