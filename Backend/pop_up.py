import requests
from bs4 import BeautifulSoup


def is_popup(element):
    
    if element.get('class') and 'popup' in element.get('class'):
        return True
    elif element.get('id') and 'popup' in element.get('id'):
        return True
    else:
        return False

# Function to scrape the webpage and detect pop-ups
def scrape_and_detect_popups(url):
    # Send a GET request to the URL
    response = requests.get(url)
    
    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Parse the HTML content of the page
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Find all elements on the page
        all_elements = soup.find_all('div')
        
        # Check each element to see if it's a pop-up
        popups = [element for element in all_elements if is_popup(element)]
        
        if popups:
            print("Pop-ups found on the page:")
            for popup in popups:
                print(popup)
        else:
            print("No pop-ups found on the page.")
    else:
        print("Failed to retrieve the webpage. Status code:", response.status_code)

# URL of the webpage to scrape
url = 'https://www.pipsnacks.com/'

# Call the function to scrape the webpage and detect pop-ups
scrape_and_detect_popups(url)
