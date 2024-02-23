Feature: All functionalities
  This feature contains all functionalities related to the application

  @Lecture @Create
  Scenario: create a Lecture
    Given a new Lecture instance
    And the user saves the Lecture instance in the system
    When the user requests the Lecture instance
    Then the system returns the new Lecture instance

  @Lecture @ReadAll
  Scenario: get all Lecture
    Given a Lecture in the system
    When the user requests the list of Lecture instances
    Then the result list contains one Lecture instance

  @Lecture @ReadOne
  Scenario: get a Lecture
    Given a Lecture in the system
    When the user requests the Lecture instance
    Then the system should return the requested Lecture

  @Lecture @update
  Scenario: update a Lecture
    Given a Lecture in the system
    When the user updates the Lecture
    Then the system should return the updated Lecture

  @Lecture @Delete
  Scenario: delete a Lecture with entity
    Given a Lecture in the system
    When the user deletes the Lecture
    Then the Lecture will not be contained in the list of Lecture instances of the system

  @Lecture @ReadOne
  Scenario: get a Lecture with correct id
    Given a Lecture in the system
    When the user requests the Lecture with a correct id
    Then the system should return the requested Lecture

  @Lecture @ReadOneWrongId
  Scenario: get a Lecture with wrong id
    Given a Lecture in the system
    When the user requests the Lecture with a wrong id
    Then the system should return status code resource not found for the requested Lecture

  @LectureDate @Create
  Scenario: create a Lecture Date
    Given a new Lecture Date instance
    And the user saves the Lecture Date instance in the system
    When the user requests the Lecture Date instance
    Then the system returns the new Lecture Date instance

  @LectureDate @ReadAll
  Scenario: get all Lecture Date
    Given a Lecture Date in the system
    When the user requests the list of Lecture Date instances
    Then the result list contains one Lecture Date instance

  @LectureDate @ReadOne
  Scenario: get a Lecture Date
    Given a Lecture Date in the system
    When the user requests the Lecture Date instance
    Then the system should return the requested Lecture Date

  @LectureDate @Update
  Scenario: update a Lecture Date
    Given a Lecture Date in the system
    When the user updates the Lecture Date
    Then the system should return the updated Lecture Date

  @LectureDate @Delete
  Scenario: delete a Lecture Date with entity
    Given a Lecture Date in the system
    When the user deletes the Lecture Date
    Then the Lecture Date will not be contained in the list of Lecture Date instances of the system

  @LectureDate @ReadOne
  Scenario: get a Lecture Date with correct id
    Given a Lecture Date in the system
    When the user requests the Lecture Date with a correct id
    Then the system should return the requested Lecture Date

  @LectureDate @ReadOneWrongId
  Scenario: get a Lecture Date with wrong id
    Given a Lecture Date in the system
    When the user requests the Lecture Date with a wrong id
    Then the system should return status code resource not found for the requested Lecture Date

  @Lecturer @Create
  Scenario: create a Lecturer
    Given a new Lecturer instance
    And the user saves the Lecturer instance in the system
    When the user requests the Lecturer instance
    Then the system returns the new Lecturer instance

  @Lecturer @ReadAll
  Scenario: get all Lecturer
    Given a Lecturer in the system
    When the user requests the list of Lecturer instances
    Then the result list contains one Lecturer instance

  @Lecturer @ReadOne
  Scenario: get a Lecturer
    Given a Lecturer in the system
    When the user requests the Lecturer instance
    Then the system should return the requested Lecturer

  @Lecturer @Update
  Scenario: update a Lecturer
    Given a Lecturer in the system
    When the user updates the Lecturer
    Then the system should return the updated Lecturer


  @Lecturer @Delete
  Scenario: delete a Lecturer with entity
    Given a Lecturer in the system
    When the user deletes the Lecturer
    Then the Lecturer will not be contained in the list of Lecturer instances of the system

  @Lecturer @ReadOne
  Scenario: get a Lecturer with correct id
    Given a Lecturer in the system
    When the user requests the Lecturer with a correct id
    Then the system should return the requested Lecturer

  @Lecturer @ReadOneWrongId
  Scenario: get a Lecturer with wrong id
    Given a Lecturer in the system
    When the user requests the Lecturer with a wrong id
    Then the system should return status code resource not found for the requested Lecturer

  @Lecturer @ReadOneWrongEmail
  Scenario: create a lecturer with wrong email
    Given a new lecturer instance with an already used email
    And the user saves the Lecturer instance in the system
    Then the system returns status code bad request

  @Semester @Create
  Scenario: create a Semester
    Given a new Semester instance
    And the user saves the Semester instance in the system
    When the user requests the Semester instance
    Then the system returns the new Semester instance

  @Semester @ReadAll
  Scenario: get all Semester
    Given a Semester in the system
    When the user requests the list of Semester instances
    Then the result list contains one Semester instance

  @Semester @ReadOne
  Scenario: get a Semester
    Given a Semester in the system
    When the user requests the Semester instance
    Then the system should return the requested Semester

  @Semester @Update
  Scenario: update a Semester
    Given a Semester in the system
    When the user updates the Semester
    Then the system should return the updated Semester


  @Semester @Delete
  Scenario: delete a Semester with entity
    Given a Semester in the system
    When the user deletes the Semester
    Then the Semester will not be contained in the list of Semester instances of the system

  @Semester @ReadOne
  Scenario: get a Semester with correct id
    Given a Semester in the system
    When the user requests the Semester with a correct id
    Then the system should return the requested Semester

  @Semester @ReadOneWrongId
  Scenario: get a Semester with wrong id
    Given a Semester in the system
    When the user requests the Semester with a wrong id
    Then the system should return status code resource not found for the requested Semester


