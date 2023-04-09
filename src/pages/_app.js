
import '../../public/vendor/bootstrap/css/bootstrap.min.css'
import '../../public/vendor/bootstrap-icons/bootstrap-icons.css'
import '../../public/vendor/boxicons/css/boxicons.min.css'
import '../../public/vendor/remixicon/remixicon.css'
import '../../public/css/style.css'
import '../../public/css/landingStyles.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script src="../../vendor/bootstrap/js/bootstrap.bundle.min.js"/>
    <Script src="../../vendor/php-email-form/validate.js"/>
    <Script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"/>
    <Script src="../../js/main.js"/>
    <Script src="../../js/landingScripts.js"/>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
