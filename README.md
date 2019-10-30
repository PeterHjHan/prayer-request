# Software Requirements Specification
## For Prayer-Request

Table of Contents
=================
  * [Revision History](#revision-history)
  * [Introduction](#1-introduction)
    * 1.1 [Purpose](#11-purpose)
    * 1.2 [Document Conventions](#12-document-conventions)
    * 1.3 [Intended Audience and Reading Suggestions](#13-intended-audience-and-reading-suggestions)
    * 1.4 [Product Scope](#14-product-scope)
    * 1.5 [References](#15-references)
  * [Overall Description](#overall-description)
    * 2.1 [Product Perspective](#21-product-perspective)
    * 2.2 [Product Functions](#22-product-functions)
    * 2.3 [User Classes and Characteristics](#23-user-classes-and-characteristics)
    * 2.4 [Operating Environment](#24-operating-environment)
    * 2.5 [Design and Implementation Constraints](#25-design-and-implementation-constraints)
    * 2.6 [User Documentation](#26-user-documentation)
    * 2.7 [Assumptions and Dependencies](#27-assumptions-and-dependencies)
  * [External Interface Requirements](#external-interface-requirements)
    * 3.1 [User Interfaces](#31-user-interfaces)
    * 3.2 [Hardware Interfaces](#32-hardware-interfaces)
    * 3.3 [Software Interfaces](#33-software-interfaces) 
    * 3.4 [Communications Interfaces](#34-communications-interfaces)
  * [System Features](#system-features)
    * 3.1 [User Interfaces](#31-user-interfaces)
    * 3.2 [Hardware Interfaces](#32-hardware-interfaces)
    * 3.3 [Software Interfaces](#33-software-interfaces) 
    * 3.4 [Communications Interfaces](#34-communications-interfaces)
    * 4.1 [CRUD operations](#41-CRUD-operations-:-P(5))
    * 4.2 [Authentication and Authorization](#42-authentication-and-authorization-:-P(5))
    * 4.3 [Search Functions](#43-search-functions-:-P(4))
    * 4.4 [User Interactions](#44-user-interactions-:-P(4))
  * [System Routes](#system-routes)
    * 5.1 [Prayer Routes](#51-prayer-routes)
    * 5.2 [Type Route](#52-type-routes)
    * 5.3 [Organization Route](#53-organization-routes)
    * 5.4 [User Route](#54-user-routes)
    * 5.5 [Miscellaneous Route](#55-miscellaneous-routes)
  * [Other Nonfunctional Requirements](#other-nonfunctional-requirements)
    * 6.1 [Performance Requirements](#61-performance-requirements)
    * 6.2 [Safety Requirements](#62-safety-requirements)
    * 6.3 [Security Requirements](#63-security-requirements)
  * [Other Requirements](#other-requirements)
* [Appendix A: Glossary](#appendix-a-glossary)
* [Appendix B: Analysis Models](#appendix-b-analysis-models)
* [Appendix C: To Be Determined List](#appendix-c-to-be-determined-list)




## Revision History
| Name | Date    | Reason For Changes  | Version   |
| ---- | ------- | ------------------- | --------- |
|      |         |                     |           |
|      |         |                     |           |
|      |         |                     |           |

## 1. Introduction
### 1.1 Purpose 

To build a web-application where users can share their personal prayer request to others in a single platform and help others pray for the same topic.

### 1.2 Document Conventions

None

### 1.3 Intended Audience and Reading Suggestions

Intended audience are religious groups that want to share their prayer requests to help each other and pray for other people. 

For developers wanting to know the details of the project:

|Description| Link |
|-----------|------|
|General product description | Section 2.2 [Product Functions](#22-product-functions)|
|Stack List| 3.3 [Software Interfaces](#33-software-interfaces) |
|System features|[System Features](#system-features)|

### 1.4 Product Scope

To provide a 24/7 online web application where memebers of a religious group can share their prayers. And users can remain anonymous if they desire to remain secret but requires the help of other prayers.  

### 1.5 References

* [SRS template](https://github.com/rick4470/IEEE-SRS-Tempate)

## Overall Description
### 2.1 Product Perspective
This is originally built as a self-contained product or a stand-a-lone. In the future, planning to be released to other organizations to integrate it on their main webpages. 

In the event of an integration to a bigger application, it must require NodeJs (12.11.1 or greater), a Non-RDMS (MongoDB 4.2.0 greater preferred), and React (16.10 or greater) for its basic functionality. 

### 2.2 Product Functions

* userized and authenticated users are able to complete CRUD operations and view the history on their created prayer requests.
* non-userized users are able to Create and Read operations. 
* All users will be able to search by type of prayer, specific words, or user's name

### 2.3 User Classes and Characteristics

* All users
  * interested on the visited religious group 
  * the knowledge and ability to complete a form on any devices (mobile, tablets, and desktops)
  * interested on helping other people's prayer requests
  * someone seeking help
* Authenticated Users
  * In addition to <i>All Users</i>:
    * can complete CRUD operations on their posted prayers
* Visitors
  * In addition to <i>All Users</i>:
    * can complete Create and Read Operations. 
* Content Administrator
  * Web developers will be responsible for maintaining database scalabilities, request maintenance, user maintenance, and application security.

### 2.4 Operating Environment
* This is a web-based application
* AWS
* React (16.10 or greater)
* Node (12.11.1 or greater)
* Auth0
* 

### 2.5 Design and Implementation Constraints
* developers will need to know the languages layed out in the 2.4 [Operating Environment](#24-operating-environment).

Describe any items or issues that will limit the options available to the developers. These might include: corporate or regulatory policies; hardware limitations (timing requirements, memory requirements); interfaces to other applications; specific technologies, tools, and databases to be used; parallel operations; language requirements; communications protocols; security considerations; design conventions or programming standards (for example, if the customer’s organization will be responsible for maintaining the delivered software).
### 2.6 User Documentation
* The website will have a button element that will provide visual tutorial on the application uses for all types of users. 
### 2.7 Assumptions and Dependencies
* Assumptions:
  * Users are able to use any devices correctly to complete CRUD operations.
* Dependencies:
  * Cloud-services, AWS
  * Compatible browsers for all type of devices. 
  * Auth0
  * Stable internet connection.

## External Interface Requirements
### 3.1 User Interfaces
* Main page
  * In the center will contain a form element to submit the prayer request 
    * the form inputs will change whether the user is authenticated or not.
  * Randomly picked prayer requests will appear around the page so users can click (or other event handling) on to see the specific  
* All pages
  * Contain a nav bar
    * Search bar 
      * can search by type, organization name, user name
    * User settings
      * can change password, its username, change state to being anonoymous or not, view posted prayers. 

### 3.2 Hardware Interfaces
* browsers that support Javascript, HTML5, CSS, Auth0
* responsive requirements 
* any devices that are capable of running Chrome and Firefox browsers.
### 3.3 Software Interfaces

| Name | Description |
|------|-------------|
|Aws | Cloud-based service using it as IAAS
|React| Version: 16.10 or greater; Responsible for Frontend
|Node| Version: 12.11.1 or greater; Responsible for BackEnd
|Auth0| third party app responsible for user authentication and userization
|Database | graphQL |

### 3.4 Communications Interfaces
* Using web-application and only requires simple online electronic forms

## System Features

Priority Levels are set from 1 to 5, 1 being the lowest and 5 being the highest in the apps requirement to function. 

Each System Sub section will have a P(n) in its header, the n refers to the Priority Level.

More details on the following table : 

|Level| Description|
|-----|------------|
|5| Core feature of the application |
|4| Sub-features that will enhance UI/UX|
|3| Future stretch goals
|2| Ideas that are implement
|1| Unnecessary or does not meet the product's core values

### 4.1 CRUD operations : P(5)
4.1.1   Description
  * Authenticated and userized users will have the ability to complete CRUD operations on their posted prayers.
4.1.2   Stimulus/Response Sequences
  1. Users will have a stable connection to the internet
  2. Users should receieve a 200 status code response when connecting to the DNS
  3. The main page of the application will be loaded when succesfully loaded
    * if the user does not have the right browser compatibility, a pop-up will be opened to suggest to open with the right browser.
4.1.3   Functional Requirements
  * Update and Delete can only performed for authenticated and userized users.
  * Create
    * Users should use the <i>form</i> element in the main page to create
  * Read
    * Users can read random posts, or search function. When the main page is refreshed, users should be able to see new prayer requests
  * Update
    * Users should be able to update their own prayer requests with various states
    * Users can also update other people's prayers indicating, they will also pray for that request
    * Prayer owners can update the following: type, context, fulfilled or not.
  * Delete
    * Users can delete their own posted prayers regardless if the post has been prayed or not.

### 4.2 Authentication and userization : P(5)
4.2.1 Description
  * This will use a third-party Auth0 to assist with userization and authentication.
  * Full tutorial can be found from the [Auth0's main tutorial](https://auth0.com/)

### 4.3 Search Functions : P(4)
4.3.1 Description
  * Users should be able to search based on keywords

### 4.4 User Interactions : P(4)
4.4.1 Description
  * Users should be able to like or unlike other authenticated prayers 

## System Routes
### 5.1 Prayer Routes
| Route | Type | Description |
|------|-------|-------------|
| / | GET | Gets the main webpage|
| /prayers| GET | Retrieves all Prayers
| /prayers/prayer_id| GET | Retrieves a single prayer id
| /prayers/prayer_id| PUT | Updates an existing prayer
| /prayers/prayer_id/follow| PUT | Follow the prayer_id
| /prayers/new | POST | Creates a new prayer|
| /prayers/prayer_id/delete | DELETE| deletes existing prayer

### 5.2 Type Routes
| Route | Type | Description |
|------|-------|-------------|
| /type/type_id | GET | Gets all prayes with the indicated 'type_name'

### 5.3 Organization Routes
| Route | Type | Description |
|------|-------|-------------|
| /org | GET | List of all organization names
| /org/organization_name | GET | Retrieves all prayers of the organization

### 5.4 user Routes
| Route | Type | Description |
|------|-------|-------------|
| /a/user_name/ | GET | dashboard for logged in user
| /a/user_name/prayers/ | GET | show all prayers posted by user
| /a/user_name/follow/ | GET | Show all prayer that the user has follow
| /a/user_name/org | GET | Get the contents of the registered organization 
| /a/user_name/org | PUT | Able to configure an organization if organization admin
| /a/user_name/delete | DELETE | Deletes all the information associated with the user
| /a/user_name/edit | PUT | Updates user's information 

### 5.5 Admin Routes
| Route | Type | Description |
|------|-------|-------------|
| /admin | GET | dashboard for admin
| /admin/prayer_id/delete | DELETE | Deletes a prayer
| /admin/org | GET | View all the datas for all listed organization
| /admin/org/request | POST | Creates a new organization for use upon request via email
| /admin/org/organization_id | GET | Get full details of the organization
| /admin/org/organization_id | PUT | updates Orgnization information
| /admin/org/organization_id | DELETE | deletes Organization

### 5.6 Miscellaneous Routes 

| Route | Type | Description |
|------|-------|-------------|
|/error|GET | Returns a error page


## Other Nonfunctional Requirements
### 6.1 Performance Requirements
* Correct Browser compatibility
* Will implement various CSS properties that may have compatability issue
* Javacsript enabled
### 6.2 Safety Requirements
* If authenticated users wish to post a prayer as anonymous but accidently upload with their username, this may expose their unwanted prayer request and may damage their reputation.
### 6.3 Security Requirements
* Malicious attackers should not gain access to passwords of the users or the link between a prayer with its owner (to hide anonymous)

