$(document).ready(function() {
    var faq = [
                {
                    title: "Ну де ще ви бачили безкоштовні перекази?",
                    description: "Enter the domain name or URL in the active line and click on “Check”. In a few seconds our website SEO checker shows your page score, notices, warnings, critical errors. If you see some unknown parameter in the website SEO analysis, hover your mouse over an “i” icon and learn a short description."
                },
                {
                    title: "What does the page SEO score mean in Sitechecker?",
                  description: "Page Score is our internal rate based on combination of valuation of critical errors, warnings, notices and Google Page Speed results. It’s a relative measure. So, use it for evaluating changes you make on the page during the following SEO test."
                },
                {
                    title: "How to work with the results of website scan?",
                  description: "Using short tips of our SEO analysis software for fixing errors and try to make your page ideal in <a href='https://sitechecker.pro/on-page-seo/'>on-page SEO</a>. Pay attention, that you get results for one exact page, not for all pages of the site. So, probably, you need to make a lot of changes on the whole site to grow your general site SEO score."
                },
                {
                    title: "I fix the errors on my site according to the recommendations of your SEO checker. How can I assess the impact of such changes on the amount of traffic and on the site positions in SERP?",
                  description: "Fixing the errors in technical optimization usually takes place in parallel with other works on the site. At first, we recommend to capture large-scale website changes to your web analytics system (as a rule, it’s most convenient to do this in Google Analytics). Adding this event at once, further you can estimate at any moment: <ul> <li>How the behavior of users on the site has changed? (the number of pages viewed, the time on the site, the percentage of failures);</li> <li>How the number of returned users has changed compared to previous periods (use a cohort analysis);</li> <li>How the positions for specific keywords and landing pages have changed&nbsp;(like Google Search Console and Yandex Webmaster data to evaluate changes).</li> </ul>"
                },
        ];
    for (let i = 0; i < faq.length; i++) {
        const element = faq[i];
        $(".accordion")
            .append("<div class='accordion-block'><div class='accordion-block-head'><h5 class='accordion-block__question'>"
            + element.title + 
            "</h5> <div class='arrow-decor'><img src='img/arrow.svg' alt=''></div></div><div class='accordion-block__answer'>"
            + element.description + "</div></div>"
        );
    }
    $('.accordion-block-head').click(function(){
        let $this = $(this),
            accBlock = $this.closest('.accordion-block'),
            accAnswer = accBlock.find('.accordion-block__answer');

            accAnswer.slideToggle(300);
            accBlock.toggleClass('open');
    });
});