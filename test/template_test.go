package test

import (
	"html/template"
	"log"
	"os"
	"testing"
	"time"

	"github.com/uretgec/hacker-news-theme/data"
)

func Test404Template(t *testing.T) {

	// Get MyData
	md := getMyData()

	// Render Template
	tmpl := template.Must(template.New("404.html").Funcs(getMyFuncs()).ParseFiles(getMyFileList("../templates/templatego/404.tmpl")...))
	err := tmpl.ExecuteTemplate(os.Stdout, "base", md)
	if err != nil {
		log.Fatalf("template execution: %s", err)

		t.Errorf("Error: %v", err)
	}
}

func TestIndexTemplate(t *testing.T) {

	// Get MyData
	md := getMyData()

	// Render Template
	tmpl := template.Must(template.New("index.html").Funcs(getMyFuncs()).ParseFiles(getMyFileList("../templates/templatego/index.tmpl")...))
	err := tmpl.ExecuteTemplate(os.Stdout, "base", md)
	if err != nil {
		log.Fatalf("template execution: %s", err)

		t.Errorf("Error: %v", err)
	}
}

func TestLoginTemplate(t *testing.T) {

	// Get MyData
	md := getMyData()

	// Render Template
	tmpl := template.Must(template.New("login.html").Funcs(getMyFuncs()).ParseFiles(getMyFileList("../templates/templatego/login.tmpl")...))
	err := tmpl.ExecuteTemplate(os.Stdout, "base", md)
	if err != nil {
		log.Fatalf("template execution: %s", err)

		t.Errorf("Error: %v", err)
	}
}

func TestPageTemplate(t *testing.T) {

	// Get MyData
	md := getMyData()

	// Render Template
	tmpl := template.Must(template.New("page.html").Funcs(getMyFuncs()).ParseFiles(getMyFileList("../templates/templatego/page.tmpl")...))
	err := tmpl.ExecuteTemplate(os.Stdout, "base", md)
	if err != nil {
		log.Fatalf("template execution: %s", err)

		t.Errorf("Error: %v", err)
	}
}

func TestSearchTemplate(t *testing.T) {

	// Get MyData
	md := getMyData()

	// Render Template
	tmpl := template.Must(template.New("search.html").Funcs(getMyFuncs()).ParseFiles(getMyFileList("../templates/templatego/search.tmpl")...))
	err := tmpl.ExecuteTemplate(os.Stdout, "base", md)
	if err != nil {
		log.Fatalf("template execution: %s", err)

		t.Errorf("Error: %v", err)
	}
}

func TestSingleTemplate(t *testing.T) {

	// Get MyData
	md := getMyData()

	// Render Template
	tmpl := template.Must(template.New("single.html").Funcs(getMyFuncs()).ParseFiles(getMyFileList("../templates/templatego/single.tmpl")...))
	err := tmpl.ExecuteTemplate(os.Stdout, "base", md)
	if err != nil {
		log.Fatalf("template execution: %s", err)

		t.Errorf("Error: %v", err)
	}
}

func getMyData() data.MyData {
	md := data.MyData{}
	md.GetDataFromFile("../data/data.json")

	return md
}

func getMyFuncs() template.FuncMap {
	return template.FuncMap{
		"convertUpdateTime": convertUpdateTime,
		"add":               add,
		"remove":            remove,
	}
}

func getMyFileList(files ...string) []string {
	requiredFiles := []string{
		"../templates/templatego/layouts/base.tmpl",
		"../templates/templatego/partials/header.tmpl",
		"../templates/templatego/partials/pagination.tmpl",
		"../templates/templatego/partials/footer.tmpl",
	}

	return append(requiredFiles, files...)
}

func convertUpdateTime(updated int64) time.Time {
	return time.Unix(updated, 0)
}

func add(a int, b int) int {
	return a + b
}

func remove(a int, b int) int {
	return a - b
}
