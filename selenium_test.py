import os
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from time import sleep

path=os.path.abspath(os.getcwd())

users={
    "Pranav":"sdkiq23r",
    "Testing":"hjgf345",
    "User":"kl;hjzc"

    }

usernotes={
    "Pranav":{
            "Does this work???":"Only one way to find out",
            "Check again":"Okay yes sure okay",
            "lorem ipsum":"hldglsdunovudfvgshfvuisdhufvs"
        },
    "Testing":{
            "testing lolol":"always testing",
            "test 2":"asdfasf",
            "etst 3":"very informative"
        },
    "User":{
            "User moment":"very nice user",
            "important note":"very important dont tell anyone",
            "afsdfsff":"jvhzdshzvdjhvzdxhvdsjh"
        }


    }

options = webdriver.FirefoxOptions()
driver = webdriver.Firefox(options=options)

site="file://"+path+"/website/index.html"
driver.get(site)

for i in list(users.keys()): # testing different users
    notes=list(usernotes[i].keys())
    sleep(0.5)
    un_field=driver.find_element(By.XPATH, '//*[@id="Username"]')
    un_field.clear()
    un_field.send_keys(i)


    pw_field=driver.find_element(By.XPATH, '//*[@id="Password"]')
    pw_field.clear()
    pw_field.send_keys(users[i])



    driver.find_element(By.XPATH, '//*[@id="Login"]').click() # this should show error as user does exist
    sleep(0.5)
    driver.find_element(By.XPATH, '//*[@id="Signup"]').click()
    sleep(0.5)
    driver.find_element(By.XPATH, '//*[@id="Login"]').click()
    sleep(0.5)

    n_search_field=driver.find_element(By.XPATH, '//*[@id="NoteName"]')
    n_search_field.clear()
    n_search_field.send_keys(notes[0])
    driver.find_element(By.XPATH, '//*[@id="Save"]').click()#no results as doesnt exist

    driver.find_element(By.XPATH, '//*[@id="WriteButton"]').click()
    sleep(0.5)

    for j in notes:
        sleep(0.5)
        topic_field=driver.find_element(By.XPATH, '//*[@id="NoteName"]')
        topic_field.clear()
        topic_field.send_keys(j)
        notes_field=driver.find_element(By.XPATH, '//*[@id="TextBox"]')
        notes_field.clear()
        notes_field.send_keys(usernotes[i][j])

        driver.find_element(By.XPATH, '//*[@id="Save"]').click()

    driver.find_element(By.XPATH, '//*[@id="ReadButton"]').click()

    for j in notes:
        sleep(1)
        topic_field=driver.find_element(By.XPATH, '//*[@id="NoteName"]')
        topic_field.clear()
        topic_field.send_keys(j)


        driver.find_element(By.XPATH, '//*[@id="Save"]').click()

    sleep(0.5)




    driver.find_element(By.XPATH, '//*[@id="LogOut"]').click()

    sleep(0.5)

for i in list(users.keys()): # testing different users
    notes=list(usernotes[i].keys())
    sleep(0.5)
    un_field=driver.find_element(By.XPATH, '//*[@id="Username"]')
    un_field.clear()
    un_field.send_keys(i)


    pw_field=driver.find_element(By.XPATH, '//*[@id="Password"]')
    pw_field.clear()
    pw_field.send_keys(users[i])

    driver.find_element(By.XPATH, '//*[@id="Login"]').click()
    sleep(0.5)

    for j in notes:
        sleep(1)
        topic_field=driver.find_element(By.XPATH, '//*[@id="NoteName"]')
        topic_field.clear()
        topic_field.send_keys(j)

        driver.find_element(By.XPATH, '//*[@id="Save"]').click()

    sleep(0.5)




    driver.find_element(By.XPATH, '//*[@id="LogOut"]').click()

    sleep(0.5)




