import requests
from bs4 import BeautifulSoup

def check_about_us(url):
    # Send a GET request to the URL
    response = requests.get(url)

    # Check if the request was successful
    if response.status_code == 200:
        # Parse the HTML content of the page
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Find links with text containing "about" or "about us"
        about_links = soup.find_all('a', string=lambda text: text and ('about' in text.lower()))
        print(about_links)
        contact_links = soup.find_all('a', string=lambda text: text and ('contact' in text.lower()))
        if about_links or contact_links:
            print("This website has an 'About Us' section.")
            for link in about_links:
                print("About Us Page:", link['href'])
                
            for link in contact_links:
                print("About Us Page:", link['href'])
        else:
            print("This website does not seem to have an 'About Us' section.")
    else:
        print("Failed to retrieve the webpage.")

# Example usage:
url = 'https://www.kaunbanegacrorepati.org/'
check_about_us(url)
