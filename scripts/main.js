var today = "http://worldcup.sfg.io/matches/today?by_date=ASC";
var tomorrow = "http://worldcup.sfg.io/matches/tomorrow?by_date=ASC";
var now = "http://worldcup.sfg.io/matches/current?by_date=ASC";

// auto-refresh page each 5 seconds.
// because live scores.

setTimeout(function() {
    window.location.reload(1);
}, 10000);

function formattedTime(date) {
    var date = new Date(date);

    var months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var timezoneOffset = date.getTimezoneOffset();
    var month = months[date.getMonth()];
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();

    // pretty output (MM DD, HH:mm)

    if (hour < 10 && minute < 10) {
        return month + " " + day + ", " + 0 + hour + ":" + minute + 0;
    }
    // probably not needed but they're there in case they change the hours.
    if (minute < 10) {
        return month + " " + day + ", " + hour + ":" + minute + 0;
    }

    if (hour < 10) {
        return month + " " + day + ", " + 0 + hour + ":" + minute;
    }
}

$.ajax({
    url: today,
    dataType: "json",
    success: function(data) {
        $.each(data, function(index) {
            $(".matches_today")
                .append("<ul>")
                .append("<li>")
                .append("Teams: " + data[index].home_team.country + " vs " + data[index].away_team.country)
                .append("<br />Location: " + data[index].location)
                .append("<br />Time: " + formattedTime(data[index].datetime));
            if (data[index].status === "completed") {
                $(".matches_today")
                    .append("<br />Winner: " + data[index].winner)
                    .append("<br />Score: " + data[index].home_team.country + " " + data[index].home_team.goals + " - " + data[index].away_team.goals + " " + data[index].away_team.country)
                    .append("</li>")
                    .append("</ul");
            } else {
                $(".matches_today")
                    .append("</li>")
                    .append("</ul");
            }
        });
    },
    error: function() {
        $(".matches_today").append("It appears that there's an error with the API. Please come back later.");
    }
});

$.ajax({
    url: tomorrow,
    dataType: "json",
    success: function(data) {
        $.each(data, function(index) {
            $(".matches_tomorrow")
                .append("<ul>")
                .append("<li>")
                .append("Teams: " + data[index].home_team.country + " vs " + data[index].away_team.country)
                .append("<br />Location: " + data[index].location)
                .append("<br />Time: " + formattedTime(data[index].datetime))
                .append("</li>")
                .append("</ul");
        });
    },
    error: function() {
        $(".matches_tomorrow").append("It appears that there's an error with the API. Please come back later.");
    }
});

$.ajax({
    url: now,
    dataType: "json",
    success: function(data) {
        if (data.length > 0) {
            $.each(data, function(index) {
                $(".matches_now")
                    .append("<ul>")
                    .append("<li>")
                    .append("Teams: " + data[index].home_team.country + " vs " + data[index].away_team.country)
                    .append("<br />Score: " + data[index].home_team.goals + " - " + data[index].away_team.goals)
                    .append("<br />Location: " + data[index].location)
                    .append("<br />Status: " + data[index].status);
                if (data[index].status === "completed") {
                    $(".matches_now")
                        .append("<br />Winner: " + data[index].winner)
                        .append("</li>")
                        .append("</ul");
                } else {
                    $(".matches_now")
                        .append("</li>")
                        .append("</ul");
                }
            });
        } else {
            $(".matches_now").append("There aren't any games right now. Check back later.");
        }
    },
    error: function() {
        $(".matches_now").append("It appears that there's an error with the API. Please come back later.");
    }
});