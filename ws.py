##MOST CORRECT PIECE OF CODE
print("hello")
import time
# from selenium.webdriver.common.action_chains import ActionChains
# from selenium.webdriver.common.keys import Keys
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
# from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# %pip install textblob
from textblob import TextBlob

service = Service()
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)
# service = Service()
# options = Options()
# options.add_argument("--headless") 

driver = webdriver.Chrome(service=service, options=options)

driver.get("https://www.instagram.com/p/C3YlU5LPrDm/")
driver.minimize_window()
# comments = driver.find_elements(By.CSS_SELECTOR, "._a9zr")
# for comment in comments:
#     print(comment.text)
print("first pass")
# print(driver.title)
# print(driver.find_element(By.CSS_SELECTOR,'._a9zs'))
try:
    container = WebDriverWait(driver, 40).until(
        # EC.visibility_of_element_located((By.CSS_SELECTOR, "._a9zs"))
        EC.visibility_of_element_located(
            (
                By.XPATH,
                "/html/body/div[2]/div/div/div[2]/div/div/div[1]/section/main/div[1]/div[1]/article/div/div[2]/div/div[2]/div[1]/ul/div[3]/div/div",
            )
        )
    )
    print("second pass")

    for _ in range(10):
        driver.execute_script(
            "arguments[0].scrollTop = arguments[0].scrollHeight", container
        )
        time.sleep(1)


    # comments = container.find_elements(By.XPATH, '_ap3a _aaco _aacu _aacx _aad7 _aade ')
    comments = container.find_elements(
        By.XPATH,
        ".//span[contains(concat(' ', normalize-space(@class), ' '), ' _ap3a _aaco _aacu _aacx _aad7 _aade ')]",
    )
    print("third pass")
    comment_list = []
    for comment in comments:
        # total_comments=len(comment)
        # print(total_comments)
        comment_text = comment.text
        comment_list.append(comment_text)  
        total_comments = len(comment_list)
        # print(total_comments)
        for comment_text in comment_list:
            blob = TextBlob(comment_text) 
            sentiment = blob.sentiment.polarity
            if sentiment > 0:
                tag = "positive"
            elif sentiment < 0:
                tag = "negative"
            else:
                tag = "neutral"
        print(f"Comment: {comment_text}\nSentiment: {tag}\n")
finally:
    driver.quit()
    # driver.close()
