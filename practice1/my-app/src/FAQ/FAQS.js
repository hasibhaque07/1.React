import React from 'react'

import {faqsData} from './Data'
import FAQ from './FAQ'
import style from './FAQS.module.css'




const FAQS = () => {
  return (
    <div className={style.faqs_cntainer}>
        <h1 className={style.faqs_headline}>FAQs</h1>
        {faqsData.map((faq) => <FAQ key={faq.id} {...faq}/>)}
    </div>
  )
}

export default FAQS
