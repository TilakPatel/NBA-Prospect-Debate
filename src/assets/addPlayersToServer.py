import xlrd
import os
import requests

__location__ = os.path.realpath(
    os.path.join(os.getcwd(), os.path.dirname(__file__)))

workbook = xlrd.open_workbook(os.path.join(__location__, 'playerDataSet.xlsx'))
worksheet = workbook.sheet_by_index(0)
# print(worksheet.cell(0, 0).value)

for x in range(0, 100):
    name = worksheet.cell(x, 0).value
    height = worksheet.cell(x, 1).value
    weight = worksheet.cell(x, 2).value
    position = worksheet.cell(x, 3).value
    college = worksheet.cell(x, 4).value
    year = worksheet.cell(x, 5).value
    data = {'name': name,
            'college': college,
            'position': position,
            'weight': weight,
            'height': height,
            'year': year}
    r = requests.post(url="http://localhost:8080/postPlayer", data=data)
print('Done posting.')