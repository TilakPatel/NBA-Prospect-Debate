import xlrd
import os
import requests
import json
from bs4 import BeautifulSoup as BS


__location__ = os.path.realpath(
    os.path.join(os.getcwd(), os.path.dirname(__file__)))

workbook = xlrd.open_workbook(os.path.join(__location__, 'playerDataSet.xlsx'))
worksheet = workbook.sheet_by_index(0)
# print(worksheet.cell(0, 0).value)

for x in range(0, 100):
    name = worksheet.cell(x, 0).value
    r = requests.post("https://www.nbadraft.net/players/" +
                      name.replace(' ', '-').replace("'", ''))
    htmlText = r.text
    soup = BS(htmlText, features="html.parser")
    c = soup.find_all('p', {'class': 'nba_player_attrib_score'})
    athleticism = c[0].text
    size = c[1].text
    defense = c[2].text
    leadership = c[5].text
    shooting = c[6].text
    nba_ready = c[7].text
    dribbling = c[8].text
    potential = c[9].text
    passing = c[10].text
    intangibles = c[11].text
    data = {'athleticism': athleticism,
            'size': size,
            'defense': defense,
            'leadership': leadership,
            'shooting': shooting,
            'nba_ready': nba_ready,
            'dribbling': dribbling,
            'potential': potential,
            'passing': passing,
            'intangibles': intangibles,
            'name': name}
    r2 = requests.post("http://localhost:8080/attributes", data=data)

print('Done posting.')
