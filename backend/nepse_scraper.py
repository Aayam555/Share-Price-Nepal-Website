import requests
from bs4 import BeautifulSoup

class Share:
    def __init__(self):
        self.stock_live_url = "http://www.nepalstock.com/stocklive"
        self.today_share_price_url = "https://www.sharesansar.com/today-share-price"

    def nepse_sensitive(self):
        nepse_sensitive_response = requests.get(self.home_url)
        nepse_sensitive_soup = BeautifulSoup(nepse_sensitive_response.text, "lxml")

        nepse_sensitive_collection = nepse_sensitive_soup.select("#market-watch > div.panel-body")

    def live_stock(self):
        live_stock_response = requests.get("http://www.nepalstock.com/stocklive")
        live_stock_soup = BeautifulSoup(live_stock_response.text, "lxml")

        market_status = live_stock_soup.select("#market_info > div > div.top_marketinfo")
        market_status_text = market_status[0].text.strip()

        if market_status_text == "Market Closed":
            return "Market is Closed"

        live_stock_table = live_stock_soup.select("#home-contents > div.col-xs-12.col-md-9.col-sm-9 > table")

        live_stock_table_row = live_stock_table[0].find_all("tr")

        live_stock_table_row_color_data = list()

        for colorIndex in range(1, len(live_stock_table_row)):
            try:
                live_stock_table_row_color_data.append(live_stock_table_row[colorIndex]["class"][0])

            except:
                live_stock_table_row_color_data.append("")

        live_stock_table_row_th_removed = live_stock_table_row[1:]

        live_stock_data = []
        for live_stock_table_row_data_index, live_stock_table_row_data in enumerate(live_stock_table_row_th_removed):
            live_stock_data_dict = dict()
            live_stock_table_row_data_text = live_stock_table_row_data.find_all("td")

            symbol = live_stock_table_row_data_text[1].text
            last_traded_price = live_stock_table_row_data_text[2].text
            loan_to_value = live_stock_table_row_data_text[3].text
            point_change = live_stock_table_row_data_text[4].text
            percentage_change = live_stock_table_row_data_text[5].text
            opening_price = live_stock_table_row_data_text[6].text
            high_price = live_stock_table_row_data_text[7].text
            low_price = live_stock_table_row_data_text[8].text
            volume = live_stock_table_row_data_text[9].text
            previous_change = live_stock_table_row_data_text[10].text
            color = live_stock_table_row_color_data[live_stock_table_row_data_index]


            live_stock_data_dict["symbol"] = symbol
            live_stock_data_dict["last_traded_price"] = last_traded_price
            live_stock_data_dict["loan_to_value"] = loan_to_value
            live_stock_data_dict["point_change"] = point_change
            live_stock_data_dict["percentage_change"] = percentage_change
            live_stock_data_dict["opening_price"] = opening_price
            live_stock_data_dict["high_price"] = high_price
            live_stock_data_dict["low_price"] = low_price
            live_stock_data_dict["volume"] = volume
            live_stock_data_dict["previous_change"] = previous_change
            live_stock_data_dict["color"] = color

            live_stock_data.append(live_stock_data_dict)

        return live_stock_data

    def today_share_price(self):
        today_share_price_response = requests.get(self.today_share_price_url)
        today_share_price_soup = BeautifulSoup(today_share_price_response.text, "lxml")

        today_share_price_table = today_share_price_soup.select("#headFixed > tbody")[0]
        today_share_price_table_row = today_share_price_table.find_all("tr")
        today_share_price_data = list()

        for row in today_share_price_table_row:
            today_share_price_dict = dict()
            today_share_price_table_row_data = row.find_all("td")
            today_share_price_dict["symbol"] = today_share_price_table_row_data[1].text.strip()
            today_share_price_dict["open"] = today_share_price_table_row_data[3].text
            today_share_price_dict["high"] = today_share_price_table_row_data[4].text
            today_share_price_dict["low"] = today_share_price_table_row_data[5].text
            today_share_price_dict["close"] = today_share_price_table_row_data[6].text
            today_share_price_dict["link"] = today_share_price_table_row_data[1].find("a")["href"]
            today_share_price_table_row_data[1].find("a")["title"]

            today_share_price_data.append(today_share_price_dict)

        return today_share_price_data
