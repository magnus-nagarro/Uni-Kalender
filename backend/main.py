from __init__ import *


class Lecture():
    def __init__(self, start, end, title, description, location, group, isAllDay, showAlerts, showAsBusy, color, colorText, colorBorder, repeatEveryExcludeDays, repeatEnds, url, repeatEveryCustomValue, repeatEvery, repeatEveryCustomType, organizerName, organizerEmail, type, locked, costumTags, alertOffset, id, created, lastUpdated) -> None:
        self.start = start
        self.end = end
        self.title = title
        self.description = description
        self.location = location
        self.group = group
        self.isAllDay = isAllDay
        self.showAlerts = showAlerts
        self.showAsBusy = showAsBusy
        self.color = color
        self.colorText = colorText
        self.colorBorder = colorBorder
        self.repeatEveryExcludeDays = repeatEveryExcludeDays
        self.repeatEnds = repeatEnds
        self.url = url
        self.repeatEveryCustomValue = repeatEveryCustomValue
        self.repeatEvery = repeatEvery
        self.repeatEveryCustomType = repeatEveryCustomType
        self.organizerName = organizerName
        self.organizerEmail = organizerEmail
        self.type = type
        self.locked = locked
        self.costumTags = costumTags
        self.alertOffset = alertOffset
        self.id = id
        self.created = created
        self.lastUpdated = lastUpdated

    def return_info_json(self):
        return {
            "from": self.start,
            "to": self.end,
            "title": self.title,
            "description": self.description,
            "location": self.location,
            "group": self.group,
            "isAllDay": self.isAllDay,
            "showAlerts": self.showAlerts,
            "showAsBusy": self.showAsBusy,
            "color": self.color,
            "colorText": self.colorText,
            "colorBorder": self.colorBorder,
            "repeatEveryExcludeDays": self.repeatEveryExcludeDays,
            "repeatEnds": self.repeatEnds,
            "url": self.url,
            "repeatEveryCustomValue": self.repeatEveryCustomValue,
            "repeatEvery": self.repeatEvery,
            "repeatEveryCustomType": self.repeatEveryCustomType,
            "organizerName": self.organizerName,
            "organizerEmailAddress": self.organizerEmail,
            "type": self.type,
            "locked": self.locked,
            "costumTags": self.costumTags,
            "alertOffset": self.alertOffset,
            "id": self.id,
            "created": self.created,
            "lastUpdated": self.lastUpdated,
        }


class Lecturer():
    def __init__(self, name, e_mail, password) -> None:
        self.name = name,
        self.e_mail = e_mail
        self.password = password

    def return_info_json(self):
        return {
            "name": self.name[0],
            "e_mail": self.e_mail,
            "password": self.password
        }


class Backend():
    def __init__(self) -> None:
        self.lectures = list()
        self.lecturers = list()
        self.current_user = None

    def create_app(self):
        app = Flask(__name__)
        CORS(app)

        @app.route("/test", methods=["GET"])
        def test():
            return jsonify({"success": True,
                            "message": "Hello World"})

        # GET with /lecture
        # POST with the eventdata as body -> creates new Events or updates exisitng ones
        # DELETE with /lecture?id="" deletes that object
        @app.route('/lecture', methods=["POST", "GET", "DELETE"])
        def lectures():
            if request.method == "POST":
                try:
                    if self.current_user == None:
                        return jsonify({"success": False,
                                        "message": "User not found!"})
                    json_event = request.get_json()
                    for lecture in self.lectures:
                        if lecture.id == json_event["id"]:
                            lecture.start = json_event['from']
                            lecture.end = json_event['to']
                            lecture.title = json_event['title']
                            lecture.description = json_event["description"]
                            lecture.location = json_event["location"]
                            lecture.group = json_event["group"]
                            lecture.isAllDay = json_event["isAllDay"]
                            lecture.showAlerts = json_event["showAlerts"]
                            lecture.showAsBusy = json_event["showAsBusy"]
                            lecture.color = json_event["color"]
                            lecture.colorText = json_event["colorText"]
                            lecture.colorBorder = json_event["colorBorder"]
                            lecture.repeatEveryExcludeDays = json_event["repeatEveryExcludeDays"]
                            lecture.repeatEnds = json_event["repeatEnds"]
                            lecture.url = json_event["url"]
                            lecture.repeatEveryCustomValue = json_event["repeatEveryCustomValue"]
                            lecture.repeatEvery = json_event["repeatEvery"]
                            lecture.repeatEveryCustomType = json_event["repeatEveryCustomType"]
                            lecture.organizerName = self.current_user.name[0]
                            lecture.organizerEmail = self.current_user.e_mail
                            lecture.created = json_event["created"]
                            lecture.lastUpdated = json_event["lastUpdated"]
                            print(self.lectures)
                            return jsonify({"success": True,
                                            "message": "Updated lecture"})

                    new_lecture = Lecture(json_event['from'], json_event['to'], json_event['title'], json_event['description'], json_event['location'], json_event['group'], json_event['isAllDay'],
                                          json_event['showAlerts'], json_event['showAsBusy'], json_event['color'], json_event[
                                              'colorText'], json_event['colorBorder'], json_event['repeatEveryExcludeDays'],
                                          json_event['repeatEnds'], json_event['url'], json_event[
                                              'repeatEveryCustomValue'], json_event['repeatEvery'], json_event['repeatEveryCustomType'],
                                          self.current_user.name[0], self.current_user.e_mail, json_event[
                                              'type'], json_event['locked'], json_event['customTags'], json_event['alertOffset'],
                                          json_event['id'], json_event['created'], json_event['lastUpdated'])
                    self.lectures.append(new_lecture)
                    return jsonify({"success": True,
                                    "message": "Added lecture to the list"})
                except Exception as e:
                    print(e)
                    return f"Error processing event data: {e}", 500
            elif request.method == "GET":
                return_dict = dict()
                counter = int()
                if self.current_user == None:
                    return jsonify({"success": False,
                                    "message": "User not found!"})
                for lecture in self.lectures:
                    if lecture.organizerName == self.current_user.name[0]:
                        return_dict[counter] = lecture.return_info_json()
                        counter += 1
                return_dict[-1] = counter
                return jsonify(return_dict)
            elif request.method == "DELETE":
                if self.current_user == None:
                    return jsonify({"success": False,
                                    "message": "User not found!"})
                json_event = request.get_json()
                del_id = json_event['id']
                for lecture in self.lectures:
                    if lecture.organizerName != self.current_user.name[0]:
                        continue
                    if lecture.id == del_id:
                        self.lectures.remove(lecture)
                        break
                return jsonify({"success": True,
                                "message": "Removed lecture from the list"})

        # GET with /lecturer?name=""
        # POST with den Dozentendaten als Body

        @app.route('/lecturer', methods=["POST", "GET"])
        def lecturer():
            if request.method == "POST":
                try:
                    json_lecturer = request.get_json()
                    new_lecturer = Lecturer(
                        json_lecturer['name'], json_lecturer['e-mail'], json_lecturer['password'])
                    self.lecturers.append(new_lecturer)
                    return jsonify({"success": True,
                                    "message": "Added lecturer to the list"})
                except Exception as e:
                    print(e)
                    return f"Error processing event data: {e}", 500
            elif request.method == "GET":
                pass

        # POST with /signin?e-mail=""&password=""
        # GET with /signin returns False/user not found if not logged in, and returns userdata if logged in
        @app.route('/signin', methods=["POST", "GET"])
        def sign_in():
            if request.method == "POST":
                e_mail = request.args.get('e-mail')
                password = request.args.get('password')
                for lecturer in self.lecturers:
                    if lecturer.e_mail == e_mail:
                        if str(lecturer.password) != password:
                            return jsonify({
                                "Success": False,
                                "Message": "User not found!"
                            })
                        self.current_user = lecturer
                        return jsonify(lecturer.return_info_json())
                return jsonify({
                    "Success": False,
                    "Message": "User not found!"
                })
            elif request.method == "GET":
                if self.current_user == None:
                    return jsonify({
                        "Success": False,
                        "Message": "User not found!"
                    })
                else:
                    return jsonify(self.current_user.return_info_json())

        return app


if __name__ == "__main__":
    backend = Backend()
    app = backend.create_app()
    app.run(host='0.0.0.0', port=8080, debug=True)
