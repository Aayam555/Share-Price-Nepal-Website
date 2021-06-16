import requests
from bs4 import BeautifulSoup


class Nepse:
    def __init__(self):
        self.home_url = "http://www.nepalstock.com/"
        self.stock_live_url = "http://www.nepalstock.com/stocklive"

    def nepse_sensitive(self):
        nepse_sensitive_response = requests.get(self.home_url)
        nepse_sensitive_soup = BeautifulSoup(nepse_sensitive_response.text, "lxml")

        nepse_sensitive_collection = nepse_sensitive_soup.select("#market-watch > div.panel-body")
        print(nepse_sensitive_collection)

    def live_stock(self):
        live_stock_response = requests.get("http://www.nepalstock.com/stocklive")
        live_stock_soup = BeautifulSoup(live_stock_response.text, "lxml")
        
        live_stock_table = live_stock_soup.select("#home-contents > div.col-xs-12.col-md-9.col-sm-9 > table")

        live_stock_table_row = live_stock_table[0].find_all("tr")
        live_stock_table_row_th_removed = live_stock_table_row[1:]

        live_stock_data = []
        for live_stock_table_row_data in live_stock_table_row_th_removed:
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

            live_stock_data.append(live_stock_data_dict)

        return live_stock_data 
