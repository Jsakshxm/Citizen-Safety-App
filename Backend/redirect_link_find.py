import requests
from bs4 import BeautifulSoup
import re


def scrape_and_find_redirects(url):
    
    response = requests.get(url)
    
    
    if response.status_code == 200:
       
        soup = BeautifulSoup(response.text, 'html.parser')
        
        
        anchor_tags = soup.find_all('a', href=True)
        
        
        redirect_links = []
        count = 0 
        for tag in anchor_tags:
            href = tag['href']
            if re.match(r'^https?://', href):  
                redirect_links.append(href)
                count = count + 1
        
        if count > 40:
            print("website may be unsafe")
            
        else:
            print("website is safe as per our info")
            
        # print(count)
    else:
        print("Failed to retrieve the webpage. Status code:", response.status_code)


url = 'https://www.kaunbanegacrorepati.org/'


scrape_and_find_redirects(url)
