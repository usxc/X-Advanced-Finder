document.addEventListener("DOMContentLoaded", function() {

    // ラジオボタンの選択解除機能
    const radioBtns = Array.from(document.querySelectorAll('input[type="radio"]'));

    if (radioBtns.length !== 0) {
        radioBtns.forEach((radioBtn, index) => {
            radioBtn.radioIndex = index;
            radioBtn.checkFlg = radioBtn.checked;

            radioBtn.addEventListener("click", function() {
                const thisIndex = this.radioIndex;
                const group = Array.from(document.querySelectorAll(`input[type="radio"][name="${this.name}"]`));

                if (!this.checkFlg) {
                    this.checkFlg = true;
                    group.forEach(elm => {
                        if (elm.checkFlg && elm.radioIndex !== thisIndex) {
                            elm.checkFlg = false;
                        }
                    });
                } else {
                    group.forEach(elm => {
                        if (elm.checkFlg && elm.radioIndex === thisIndex) {
                            elm.checkFlg = false;
                            elm.checked = false;
                        }
                    });
                }
            });
        });
    }

    // 検索ボタンの処理
    document.getElementById("search-button").addEventListener("click", function() {
        let query = document.getElementById("query").value;
        let since = document.getElementById("since").value;
        let until = document.getElementById("until").value;
        let mediaFilters = [];

        if (document.getElementById("filter-images").checked) mediaFilters.push("filter:images");
        if (document.getElementById("filter-videos").checked) mediaFilters.push("filter:videos");
        if (document.getElementById("filter-native-videos").checked) mediaFilters.push("filter:native_video");

        let media = mediaFilters.length > 0 ? " " + mediaFilters.join(" ") : "";
        let links = document.getElementById("filter-links").checked ? " filter:links" : "";
        let filterOption = document.querySelector("input[name='filter-options']:checked");

        let minRetweets = document.getElementById("min-retweets").value;
        let minReplies = document.getElementById("min-replies").value;
        let minFaves = document.getElementById("min-faves").value;
        let lang = document.getElementById("language").value;
        let fromUser = document.getElementById("from-user").value;
        let toUser = document.getElementById("to-user").value;

        let searchQuery = query;
        if (since) searchQuery += ` since:${since}`;
        if (until) searchQuery += ` until:${until}`;
        if (media) searchQuery += media;
        if (links) searchQuery += links;
        if (filterOption) searchQuery += ` ${filterOption.value}`;
        if (minRetweets) searchQuery += ` min_retweets:${minRetweets}`;
        if (minReplies) searchQuery += ` min_replies:${minReplies}`;
        if (minFaves) searchQuery += ` min_faves:${minFaves}`;
        if (lang) searchQuery += ` lang:${lang}`;
        if (fromUser) searchQuery += ` from:${fromUser}`;
        if (toUser) searchQuery += ` to:${toUser}`;

        let baseURL = location.hostname.includes("x.com") ? "https://x.com" : "https://twitter.com";
        let twitterSearchURL = `${baseURL}/search?q=${encodeURIComponent(searchQuery)}`;
        window.open(twitterSearchURL, "_blank");
    });
});
