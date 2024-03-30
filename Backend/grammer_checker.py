import requests
from bs4 import BeautifulSoup
import language_tool_python

def scrape_website(url):
    # Send a GET request to the URL
    response = requests.get(url)

    # Check if the request was successful
    if response.status_code == 200:
        # Parse the HTML content of the page
        soup = BeautifulSoup(response.content, 'html.parser')

        # Find and extract text content from the webpage
        text = soup.get_text()

        return text
    else:
        print("Failed to retrieve the webpage.")
        return None

def check_grammar(text):
    # Initialize LanguageTool
    count = 0
    tool = language_tool_python.LanguageTool('en-US')

    
    matches = tool.check(text)
    # print(matches)
    
    
    for match in matches:
        count = count + 1
    
    print(count) 
    if count > 50 :
        print("url can be unsafe")
        
    else :
        print("url is safe as per detected info")

url = 'https://moviesmod.lol/'
website_text = scrape_website(url)
# website_text = "hello its harsh and go todat"
if website_text:
    check_grammar(website_text)
