import Link from 'next/link';
import {
  FingerPrintIcon,
  IdentificationIcon,
  AtSymbolIcon,
  LockClosedIcon,
  GlobeEuropeAfricaIcon,
} from '@heroicons/react/24/outline';
import { Dropdown, DropdownItem } from 'flowbite-react';
import Header from '@/app/ui/header';
import GpgToClipboard from '@/app/components/gpg-clipboard';
import CommandToClipboard from '@/app/components/textfield-clipboard';

export default function Layout() {
  return (
    <main className="flex min-h-screen flex-col bg-gray dark:bg-gray-800">
      <Header />

      <div className="m-4 gap-4 flex flex-col justify-center items-center ">
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md md:min-w-2xl ">
          <div className="flex static text-gray-700 dark:text-gray-300 mt-2 mb-4 ">
            <div className="font-bold "><GlobeEuropeAfricaIcon className="text-yellow-300 w-8 h-8" /></div>
            <div className="font-bold  pl-1.5 pt-1">Web Key Directory</div>
          </div>
          <div className='ml-4'>
            <CommandToClipboard />
            <p className='m-1 text-xs font-light text-gray-800 dark:text-gray-200'>GPG &ge; 2.1.12</p>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md md:min-w-2xl">
          <div className="flex justify-between items-center">
            <div className="flex static text-gray-700 dark:text-gray-300">
              <div className="font-bold "><LockClosedIcon className="text-yellow-300 w-8 h-8" /></div>
              <div className="font-bold  pl-1.5 pt-1">GPG Key</div>
            </div>
            <span className='flex'>
              <GpgToClipboard />
              <Dropdown
                label="Download"
                dismissOnClick={false}
                className="my-2 text-white font-normal rounded-md text-sm transition-colors">
                <DropdownItem as={Link} href="/tom.roffe.asc">ASCII <span className="pl-2 text-gray-500">.asc</span></DropdownItem>
                <DropdownItem as={Link} href="/tom.roffe.gpg">Binary <span className="pl-2 text-gray-500">.gpg</span></DropdownItem>
              </Dropdown>
            </span>
          </div>
          <div className="ml-2 flex justify-normal my-2" >
            <IdentificationIcon className="text-gray-500 h-6 w-6 mx-2" />
            <p className='text-gray-800 dark:text-gray-200'>tom<AtSymbolIcon className="h-4 w-4 inline-block" />roffe•uk</p>
          </div>
          <div className="ml-2 mt-2 flex justify-normal my-2" >
            <IdentificationIcon className="text-gray-500 h-6 w-6 mx-2" />
            <p className='text-gray-800 dark:text-gray-200'>tom•roffe<AtSymbolIcon className="h-4 w-4 inline-block" />gmail•com</p>
          </div>
          <div className="ml-2 flex justify-normal items-center text-white my-2" >
            <FingerPrintIcon className="inline-block text-gray-500 h-6 w-6 mx-2" />
            <p className="text-gray-800 dark:text-gray-200">1843 654C 3778 DFC5 710D  E46B 9324 5156 BA84 3713</p>
          </div>
          <div className="flex justify-center items-center">
            <div className=" overflow-x-scroll px-3 pt-2 font-mono text-xs text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-600 rounded-md">
              <p>-----BEGIN PGP PUBLIC KEY BLOCK-----</p>


              <p>mQINBFoumnUBEADGv29uYPeWfSqQhUHugFA3j54PgdiPMnJmAfZf3Ye+NxvB+MTp</p>
              <p>On70SwwPRZvo6v6Q4nl7Fqjgl0uD1dA7MOFP5orjwU6Qef2/aCO/kQXBlIHtBlBh</p>
              <p>RHC7INEAvNQKMUiZ6mTtfC/48cq41IWXlWQc+zAPPg+yzHXXYwseSr8s++ytgyEG</p>
              <p>IYN6D0GADtYA67eYprdadLVvRgAFIHO/JQ+ljhHKe06MouRaaiAT3D1YSUXEs9UF</p>
              <p>/w6X+XQYhu2V4ElSqaboZ2fHYHuqNvSpM7USV6w/WNBOqpQvisPHWKEK/UMDFCsN</p>
              <p>S462Ndzb9YZ8rgGYygZ1c+d3M8ttfkebQzNQLWHy3pw4Tkvd3ZVrIybZLr2xBpkJ</p>
              <p>XtXJcOwZDKr6WSw/ijvnA5gakYFYv5JFHiqEtqPTk5usk943MMgjLj0JU/n6HA7W</p>
              <p>tPS1PELv3h0z8mm6BtpGu1CBDPmx0O+XtuiTqotNDBEYN/PMhno2xhltpmGPpG99</p>
              <p>3+70dxqUrzGLKcrTRcUQsjScB90utjNRZ3CaX40I6XsRq+LMiispTtvPWRKZWcod</p>
              <p>nh2zjqzbmA8yzAGqAe2Zfx5ziGKqtujtQnE+beucVihRefLX4xmLJpAKX6bYs874</p>
              <p>mboonIZfO/2KzS+C/ND9m/E5Ur852bKX/DMVYC0Oh3Hj9N8XC3nC7nVpGwARAQAB</p>
              <p>tB9Ub20gUm9mZmUgPHRvbS5yb2ZmZUBnbWFpbC5jb20+iQJRBBMBCgA7AhsDBQsJ</p>
              <p>CAcDBRUKCQgLBRYCAwEAAh4BAheAFiEEGENlTDd438VxDeRrkyRRVrqENxMFAlou</p>
              <p>qb8CGQEACgkQkyRRVrqENxMJ6A//WzWRjYTNfHA0OXnjDPpGfdNP5llInKPjamxr</p>
              <p>xJa9uQKi1TI16hdNtS91FP584yvUGf8Vc0I5MFUY4/958NOzHteJhK282CFYacEp</p>
              <p>oj9KDnOkM/XOCGR/vZUHEs6kbsd3Q7BHJ4ZYlvBU3cm6vS8m4OzL54WaSJdbNwKH</p>
              <p>MFSjrZgcDvNhY3kGbmP6dyNqNlhxKGLPUGsv2kt8JTXKVb0nVgWQGTi5hiYktpj9</p>
              <p>UGhkSRoVWxChxK8AVq3XGTJKvxKKCkfannxYl5tGmR1ypDAgHMQMGvUP4ad2KF13</p>
              <p>HbjVLTa1oFXYwuS38+Rb3PwnoPTplPkriz8gOgnPmrYb3W/RGJb6mql/gTTpfXSn</p>
              <p>yzlxkZerIuTBsDLF9/lYl2zRhMDiqJ99iRRZSa3sBVfHDLzNx22u27u7ukDcpnDH</p>
              <p>mdBxBL9HdyRSQgjHL332/QmpYAmyzdlCTSVEpAXy2qFvFHU5k9tvzF0dkm5oxtJE</p>
              <p>i1M0LzPkBD6ylvIUPw/vjvJ0UdamUSy6oKlf6CMiNFiAVNgjJzPWvnkALFc3idTN</p>
              <p>AHdtGtge9D82l2NpmGi0AbYWFu3QX5O7AXSzwLsSJBW8/oJfq1t0nSEBJ4HyKxsx</p>
              <p>5ac32etzz/2D+VFY8IY0Sf1fz+ql+jOK8SLGVpqF0PgouEurD1Ettv4BUU+5nXPi</p>
              <p>DA9kLLu0GVRvbSBSb2ZmZSA8dG9tQHRhci5tZS51az6JAk4EEwEKADgCGwMFCwkI</p>
              <p>BwMFFQoJCAsFFgIDAQACHgECF4AWIQQYQ2VMN3jfxXEN5GuTJFFWuoQ3EwUCWi6p</p>
              <p>vgAKCRCTJFFWuoQ3E0UdD/9t7BWDvqswDlFTPriwLvKrxYLPubioQgTtEfxz5IR2</p>
              <p>jNTEagsnIg77X1H+2BWnyV+BeQ/b44SDI3gcD7BRk1dOah4EGmk07Zhh09XGIDPT</p>
              <p>x/F1cpUxoAfLBVSgwWvL7WsDIqWgciyv6rHMmNsH4l166GVFmNrDPndZWZZvqDkp</p>
              <p>vbKv04TMsVKIH7gxQHcezJQIfMnSf+uPbzJrOrhc+JEBlzvP2NgWyPqkYGLrHavZ</p>
              <p>ebrSjHpVExb3r8YlxuxzDjkeQxM1umYNzxhvToaqVFbre9+yn1xXCaBCxzc6kS3A</p>
              <p>IuQcRRJ65RVHEm4grJTedYmw9tyFsNlVFJ7s9h4mxfKoAUaGvuQcovKsNkt+kTLU</p>
              <p>AgBWr+R61Edy/AJ04xrGAqh2k+bh+NI2AsFlJopsmig/zrLynvGUbAbPXCD2WvHi</p>
              <p>qzIPvs/eCW56Hd8imiP1U5GeyGySEDBWhdpd3Lst3NP8B7kM9nJy1C8fSygMk8si</p>
              <p>GZoXqx8WUS6DDLJQY2YfaHtIERSQTA2utHGh0nCeSmKaVc4hR/T7i0rRh5ugeexN</p>
              <p>WziDtNz+AXxzQNj+Zer2+aUwu5yqCES/DiqBtn2yMw3JPo1ok4sHKAp2E+VdzOw4</p>
              <p>9dqcEE+u0adwawuFBs4RX0+FS6ok/P4zzYUp6Yh5aHDxVPZjEcU7ANrQvW/wjVFQ</p>
              <p>CLQYVG9tIFJvZmZlIDx0b21Acm9mZmUudWs+iQJRBBMBCAA7FiEEGENlTDd438Vx</p>
              <p>DeRrkyRRVrqENxMFAmPbBHICGwMFCwkIBwICIgIGFQoJCAsCBBYCAwECHgcCF4AA</p>
              <p>CgkQkyRRVrqENxMwYg//WEZVH3rd6pYvLhk2JXEJQOFE/iYviXuhxRCltmPkk8rN</p>
              <p>EaQCXaJnLlY103GjqjqlomDozzvfo/ADPqq0+i+MRXsl8opeH6Vmd8yCh5DBgyYh</p>
              <p>ij/hh3ZQvHarggGfGCfVV7BBfdSG6yptDDBBzGezeNq4G6TK5AWbeHGgxOLIEdtB</p>
              <p>zHqp4gRUmEjW8llB+Q1pypnIm9rKAdPmBkxO4b/Unz+Ee1HPcjs0Gw7j3LQIX/bY</p>
              <p>iqku2CZGMNwLII9OHtaEPMZb7e5YR5ViJ5vaWWVULPrB3VFHbeKRgb3dz8wDBQxD</p>
              <p>1hST0qtqAgqNTwKU70DQeuhoOIOWtP4dLY76zDx+yoX/ynVZ7ILpy8oELWBg3cwA</p>
              <p>JysD0plElKwRm8hYXFfJgcPGK2OoefmyxePrWZO2QQ6Uetprp4nsXWeXi3Q4mF3l</p>
              <p>sOOLGXCaW1dRrSypREiSaCJp95B5zHw5TruS10ATwvCfxcOS/SwJ8+2yneeyJQbj</p>
              <p>bt1+RE/LsWGE/ljSAcTowDxPKzljvtVn6HCwcoBxRCbUK14zWafUA7WAYzSxb6ui</p>
              <p>N44GSSM2JTNFEGhD3h5a1Z2IBGFTEv/VQSTduHNhUwjptX0BQJY3+hsxt9XbSIGg</p>
              <p>rt7Fd77Yss4ZU4CeFOr35ldTY5FUQPv3U8DrIp/VRl5npwbesRrjtCvpYueHmU+5</p>
              <p>Ag0EWi6adQEQANE+Dba/H1hJ2ifKYtVoxAdT+290uKWYoVYYooFe5cNCCxP9wEad</p>
              <p>ySb4HgkEC6Sq/KuvzwUCKuSMqKthEsxlDWsnIS2b+vfMloSXEEM/YKHljZFsh/Dc</p>
              <p>sBY/I4g006aPQkQHzk07QMpjo86yAF+UHYW9DK2GGRBu1b0yyoDk+yr8hsX1h4LC</p>
              <p>h67dZ/M4EkPnfd9oNOcNEx1NpHhKjn2jmjyMIuNfpYrE34q5RnR9nQHudKX6Y1DG</p>
              <p>vknoqZsBYgtSSXD5e9JvpUeg28ElHrZ9xCnHKAb3G+Z5QBZTu8MJl4BP5oCxkZ+5</p>
              <p>ng/mMb/BJF0EBSUi0B+3GmX6csNXvB8D7s8eSAdHP9x4kVFcavJW7toR8Txn8Qv6</p>
              <p>leWsdjcovGCEiOhFkFlv06jl81vWVd8fB0MyNG/yzp+cuE8K/er5T9kAAejUElsc</p>
              <p>v9VzF+m1WeDnbys9GkLEMCcrCQ6Bye8VTgXs/vsW7Ds/0VROXJsYCje9Q3VCXpjo</p>
              <p>Bk09QiT4SgK5qz6/UMr3zjaVTAEeOJGFYaQkISyE7RpEcyuQOK5NJ0oJIzrpxJgl</p>
              <p>O5XIorqmG5tLcOP+oOKnvFP89FWfoOm3CERt14Qd5XC9QphTbABIZNhhT61GVg65</p>
              <p>bRHrOyX86RK1p1n+983fDp9JU2tr4+xLMrblzDkQhNaZ6/QzduWVBcjXABEBAAGJ</p>
              <p>AjYEGAEKACAWIQQYQ2VMN3jfxXEN5GuTJFFWuoQ3EwUCWi6adQIbDAAKCRCTJFFW</p>
              <p>uoQ3E5DdEAClt+JFGD5/tCK/W0iBgI6WmyeDr5kWVHnKJcWGRjwkb/+Vk6kNrz6o</p>
              <p>ekVoc7xQVA23DRh2qTGK/7iqhsFW99JtGTq9en139lA7AOKbpvW7qEPRjPdSvkBK</p>
              <p>WxXuAvEE5QBBIshxe1xCWvm116eUqUt+HGPLdYRfI7wDpVrYH5tARoLidcyZ/pKg</p>
              <p>8tLyAg++5GNcckx6z4cldhyjQ5v3tYnS4yJgMl04BkgnVtr0daIAFiLIetnIpGG0</p>
              <p>4JYijxIvBZz/TQU8JfED7Tk5w4rsvKcL7cSp6Ln9v0FZv16GBtcPOMWHGpeLImsC</p>
              <p>o6yDjbULs0SYuIwflshmoaf6SUCzFJ4fjbqo+8NUPtS7ofmeuijgzJ3iiak1BhLC</p>
              <p>uvN8zWTvwvIG000XaTUddgj5XFNXXLDwIOsyIB83qth3YfGDikBBzTjfsqMyt7OB</p>
              <p>bCKlqJXCcA4usZAYWOdq43z30t7MC044iqEwjwL8tLTRZYktvKEeOA+qQ95ftvlg</p>
              <p>yOQ0xWeBbBzkUZvf8zvLFEhLavu3I3cTqYtTgOsZP1EMVTfxWMozTcswipbuM8Q9</p>
              <p>km+2aYanyO7Un7EOync/VEh/F8amcQyy+VCf0YrweMlPQImT31OW52kXqO3MEu9n</p>
              <p>XfBBmIGSGEPvNdNyWZnElshFJhlAvJ3XwERWnfp24blS/1HjEuX+CLkCDQRaLqgb</p>
              <p>ARAAsVM5h1NaJXQ5QW5NvZQLkt0i5ubWzu4z4N+9kyXFILMK73Am0Lsw3p8sqMWg</p>
              <p>9YJEkQTvhwNBXrhj4pCqIHba+bCeuX9ZeQNiQKfQ1IcPGFxv29RtmsKyG4oITEWr</p>
              <p>DvWfKxMw4YS/UyoK88B1e2gTVk9DRg+IeS4+EjCJ6oh8S9GYpXimQZoL+61NohtB</p>
              <p>vREihJ0AnVniXpZW5PKcHo0Ak0yFo96BMTbyp0zvmE4F2r7nycMu2wrJrxol1wnG</p>
              <p>2Y1yAmltRqJuoyJZwxFp1XI+KhepS+ADb5qByGCvwSF01X7k7ScWXeATV/DPV+9+</p>
              <p>LQVL0g5DaFUwVu+Pfu7M0i1L3znn/sKvq8oTqCAaw02WINbSclAOo9nUfUB6lvmT</p>
              <p>BqzL8ayxZRkL27QfYmgjVLXTfltgZvUQwSEEbImhgIP52Fq1gTLCqdaVjKF2ls1L</p>
              <p>gO0jrYlrOK2GV+f02Tcle/EHcXEyhVPAP0PT1p+6jKaPt3Bp1QOfHuTm4Rqth7WV</p>
              <p>CQqDFwAom4zsE9kJ07mMRBPaul1N5yHp9fFAswVvOOGAC0tp8+Hyyy1g0K4GNLbr</p>
              <p>ea5HaRiUlZ4GqeLCLyKkI47xD0VJTpMg6p8p7QvVBHCU0WRu00/dHEhat3+Afb19</p>
              <p>Z1gnjTAVBeqBjbIP+NvrslGy/eX5gMaLK5GKZ3hGUD2bTt0AEQEAAYkCNgQYAQoA</p>
              <p>IBYhBBhDZUw3eN/FcQ3ka5MkUVa6hDcTBQJaLqgbAhsgAAoJEJMkUVa6hDcTRhcP</p>
              <p>/0zrQlWNpfoNNYWfzEaLTkNXZVMGE3O046U3Ok/Rl+4Xl7k+jf9ZGO2PNJPH/MqO</p>
              <p>XuX7TSQ+GDzhKFRTwyaLHAHFY/DmU7wQTjKD4Wh5ARqnt9zRrcCFWF6JenNzONcZ</p>
              <p>E5I64cwQF8QWr5zeU4Rl6rwU1WdIWaiA+hM3F5JX7gWi5urU+D2RAX1WK3Kmu4kF</p>
              <p>jc6ZibrY3kECzstyR4X1e01HmFdWey/763QMzHLIrwoWJaYSoVt3cgr3PTgMdCMJ</p>
              <p>WfdpTHnjuDmYowooUH2ToligF2ya0aoP/XwCgOy42emuszGonQxb+UUHD8dZOJMP</p>
              <p>EdpYHbz/nYjn6MGqaI48gvtgqVZUaC67Ok+2cioTzv8fG+JBhsk7bFAG3nOxSlIF</p>
              <p>nDTFISPJl8tHiChWDtQ+tt3Hsx4fMC3xOgt7tvRmKO4it89Nc8Xq6TCbS4Ed6wRE</p>
              <p>1CIPF5bY1rJLBlNnEX5pObeGIWK9PT+4m/36pKtxz/jEZ0RGHmhFjP6qj5PgfjQN</p>
              <p>d+wqAVTgcXkVei602jdT7/PCsb4D1yyOQ6Zl6yNKdZ0fi8POe0RD0hMbtw4k7olV</p>
              <p>GXQEzxQrfKBG9c30/PHOsdO4TSbNw57d0d4Dkca10UShX6SkSjgnFa0kZcpk0Bb8</p>
              <p>5iwRngjmLIs7bn670pkJ5T1F2ynmwEZU/QZUyr9Y6qlVuQINBFouqEIBEAC+Nebz</p>
              <p>tvgDCsHuL480j9Rje2hDUeXtjGDjQu7uuyhh3XhnHlUqvHmMogIY3qbnOSVTG6/Q</p>
              <p>+cq+EHKirec2DHZ3XtA9WYGxh5Yfvl3FxYMYUHIHPcxuQWYhBF6JRKAlU/bznQwY</p>
              <p>CFBGAXUsrYIyxQXq4LwTr2UWV+jtfJq2QGBOIVS+dteD7lWs/ZcTbk5El6A0QFZX</p>
              <p>UzBKpIJAfgvhLYjiTVJSmwwIVwLm/ofp/qe84sCUKQ2Qdcq1pCoGr48v5vLySGC4</p>
              <p>fxa1T9z3k4xu4QaqibdUArVZ1I0KoXGdZFofv5d7IWasXK2FvEQxKqXGf6WlEaeZ</p>
              <p>gFepF4fJtUYFk1X7MgSRVHpW7LmKaJXZLwve8FbqSbWQTdeVO0ESmggKbNwolNeK</p>
              <p>G/yNn8ZldWGdkFzadAZno5MzE71+XSoPMMGT8Ox662CPJ7yGmbz+Qit2bQIdwQif</p>
              <p>gX1pky05NX7yyqWAeTfQxeQYigs/TabN3O6hpndbBE2SUdzxeOUOzc5FpCF1WJVr</p>
              <p>wtifqJu4Hu6sLGekoLe7CXNTGaM1RymiBrZ+htQ7Mr1narQ2BXskgSV1vlJNiTPK</p>
              <p>ddMistRRdvh7PCCgxGtnfLzkizIPpPDafzZLLAhruzD28LU+6pX4VrgpTPJdpsVu</p>
              <p>wDghW2N8mDALLxebcMKIk2bsW20EZkvFjH3KIQARAQABiQRsBBgBCgAgFiEEGENl</p>
              <p>TDd438VxDeRrkyRRVrqENxMFAlouqEICGwICQAkQkyRRVrqENxPBdCAEGQEKAB0W</p>
              <p>IQRGe6yNYN/UgC8SipoG8o0VwWO+uAUCWi6oQgAKCRAG8o0VwWO+uID9D/9vU/CA</p>
              <p>lzgjJzPGFF3elT/QFscoBx4Z26sI3K1kF/UXO5HqOlipCeqgWwvLGWujOQW5KN2Q</p>
              <p>KNpt0BaDbDocqB1CCa2hFEc7EWDPbCs0wmEY7MLY1vxWqkXPzMtKEmW7fHwr4j4h</p>
              <p>g8aUAvGn2PdYvH9Q1crTmrw4/3TsG7sBqzzBXxk8RZznn0wYxx46/xCo0PWrRgVp</p>
              <p>Pm+fclwLDnoymTzjav7mihOXnUkMw28lAhV1IGeA5HrJJKP5FGQjnnA1gBuQtb6U</p>
              <p>A34eso9OylvSY9lqzd8jGbDK9dJMr6XeZIkdJmtZCQ01Ot7CvdAANz0VyiRmZRZd</p>
              <p>WpK2J9OpE9aAkVlD62nY6/Yh8nD4oKNNYLGaQ4I9GqaWrTVvuo9fgANm4cM/NgSW</p>
              <p>GFzvYfTURfecvsLZF9ebb8VHQfhlLXsZCFCe/3Hh1fnhg1Sr1O2Cvz+p+PlFrn8m</p>
              <p>n6kRG2h21iORZd9PBWBCwb8ja1/uwDuqagTRAZQ8yKK7Y7G9VWFromZD+/cDEnCH</p>
              <p>n5W40OsPhoySZF7WF7+800nMGWEG9zWz1bef89LH/Ji4sALhRjkaBA9kXyF29ahc</p>
              <p>6/abU+KeTvkD3CZYAhpb87zka4i/tbi/7JETHBNKknr4Hn1xiM6hG+XPoxInd13G</p>
              <p>zll/DswG+3Ldjlr6iHNsuppCh+lMN9cvUjh2tRmWD/9JPzvG4Oq+tLnj+23Dwx3m</p>
              <p>6zMpb3MJqkZ47ku6jLYC4J8Qlf88zVXSgpoWC2ZsDSFu3VUkmteNouPj/I+brtEH</p>
              <p>KMUFutWCGaRCSPxdaJbFrg51zbg0Wf0zmlMbtSRVZo5fw8EdC8zgopsdStixkQPZ</p>
              <p>h4Ir+v55dRLLVpD/2T8q891hAReP6tsmgRGuU146Q6uNJeYn7iVu9etQnS7vu4VR</p>
              <p>LwWRYAhvSXqXJe968LWyK2DXWQt7RZJ1tFk+zdPxikBIcKZ77XQ8v4d2Ssv036zc</p>
              <p>r7imU28Je2l4xYatjDJ6s/JjAjVL+oJNw57TAsWXwMvMpra3NMIOG/QHPOtyhDuC</p>
              <p>Ybd+9CHDAUe+oclCQdBZgYTZ1rUo72nuifmqGUa3bqlytPuE1yVauF2+iiGaHqw0</p>
              <p>hYcryb3xr/aLB7My6PtMj4FIFPjg5Kpq1WumQ2fI3MLB1PU8McT7EK/Pd/S3g4tz</p>
              <p>rxFXoRw3sYO5w/cSRb8ke821Tzt1NUsDatu9EA6LufFPqNYmIxNV7n3l24Wr0miJ</p>
              <p>jxjWFvNjLduV/Pos0YVzju42W86GOxuAFYs6/+brGK2rwlf9sbbUVR+901aBzvKh</p>
              <p>1vrKI000ITO19HbMtq4KleHA8+zvkt5ZiA6UfFAQ1Gbr9soOdxIEeVCtCMXxEtXq</p>
              <p>8qLuMRRXZPkXcoNrxx/xeA==</p>
              <p>=/IQk</p>


              <p>-----END PGP PUBLIC KEY BLOCK-----</p>
            </div>
          </div>
        </div>

      </div >
    </main >

  );
}
