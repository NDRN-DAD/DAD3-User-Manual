// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="guide/background.html">Background</a></li><li class="chapter-item expanded affix "><li class="part-title">DAD Reference Guide</li><li class="chapter-item expanded "><a href="login/index.html"><strong aria-hidden="true">1.</strong> Logging into DAD</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="login/2fa/index.html"><strong aria-hidden="true">1.1.</strong> Two-Factor Authentication</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="login/2fa/setup/index.html"><strong aria-hidden="true">1.1.1.</strong> How do I set it up?</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="login/2fa/setup/phone.html"><strong aria-hidden="true">1.1.1.1.</strong> Phone Authentication Setup</a></li><li class="chapter-item expanded "><a href="login/2fa/setup/browser.html"><strong aria-hidden="true">1.1.1.2.</strong> Browser Authentication Setup</a></li></ol></li><li class="chapter-item expanded "><a href="login/2fa/logging-in.html"><strong aria-hidden="true">1.1.2.</strong> How does logging in using 2FA work once I have set it up?</a></li><li class="chapter-item expanded "><a href="login/2fa/support.html"><strong aria-hidden="true">1.1.3.</strong> Support</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="guide/control-panel.html"><strong aria-hidden="true">2.</strong> DAD Control Panel</a></li><li class="chapter-item expanded "><a href="display/index.html"><strong aria-hidden="true">3.</strong> Display/User Preferences</a></li><li class="chapter-item expanded "><a href="desktop/index.html"><strong aria-hidden="true">4.</strong> Desktop</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="desktop/links/index.html"><strong aria-hidden="true">4.1.</strong> Desktop Links</a></li><li class="chapter-item expanded "><a href="desktop/actions/index.html"><strong aria-hidden="true">4.2.</strong> Desktop Actions</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="desktop/actions/views.html"><strong aria-hidden="true">4.2.1.</strong> Views</a></li><li class="chapter-item expanded "><a href="desktop/actions/tasks.html"><strong aria-hidden="true">4.2.2.</strong> Tasks</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="desktop-columns/index.html"><strong aria-hidden="true">5.</strong> Desktop Columns</a></li><li class="chapter-item expanded "><a href="contact-search/index.html"><strong aria-hidden="true">6.</strong> Basic Contact Search Criteria</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="contact-search/client-information.html"><strong aria-hidden="true">6.1.</strong> Client Information</a></li></ol></li><li class="chapter-item expanded "><a href="client-view/index.html"><strong aria-hidden="true">7.</strong> Client View</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="client-view/views.html"><strong aria-hidden="true">7.1.</strong> Views</a></li><li class="chapter-item expanded "><a href="client-view/tasks.html"><strong aria-hidden="true">7.2.</strong> Tasks</a></li><li class="chapter-item expanded "><a href="client-view/create-client/index.html"><strong aria-hidden="true">7.3.</strong> Create New Client</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="client-view/create-client/client-disabilities.html"><strong aria-hidden="true">7.3.1.</strong> Client Disabilities</a></li><li class="chapter-item expanded "><a href="client-view/create-client/client-accomodations.html"><strong aria-hidden="true">7.3.2.</strong> Client Accomodations</a></li><li class="chapter-item expanded "><a href="client-view/create-client/client-contacts.html"><strong aria-hidden="true">7.3.3.</strong> Client Contacts</a></li></ol></li><li class="chapter-item expanded "><a href="client-view/edit-clients/index.html"><strong aria-hidden="true">7.4.</strong> Edit Clients</a></li></ol></li><li class="chapter-item expanded "><a href="attachments/index.html"><strong aria-hidden="true">8.</strong> Attachments</a></li><li class="chapter-item expanded "><a href="contacts/index.html"><strong aria-hidden="true">9.</strong> Contacts</a></li><li class="chapter-item expanded "><a href="service-request/index.html"><strong aria-hidden="true">10.</strong> Service Request</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="service-request/views.html"><strong aria-hidden="true">10.1.</strong> Views</a></li><li class="chapter-item expanded "><a href="service-request/tasks.html"><strong aria-hidden="true">10.2.</strong> Tasks</a></li></ol></li><li class="chapter-item expanded "><a href="new-service-request/index.html"><strong aria-hidden="true">11.</strong> New Service Request</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="new-service-request/link-project.html"><strong aria-hidden="true">11.1.</strong> Link Service Request to Projects</a></li><li class="chapter-item expanded "><a href="new-service-request/close-sr/index.html"><strong aria-hidden="true">11.2.</strong> Close a Service Request</a></li></ol></li><li class="chapter-item expanded "><a href="projects/index.html"><strong aria-hidden="true">12.</strong> Projects</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="projects/project-search.html"><strong aria-hidden="true">12.1.</strong> Project Search</a></li><li class="chapter-item expanded "><a href="projects/view/index.html"><strong aria-hidden="true">12.2.</strong> Project View</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="projects/view/views.html"><strong aria-hidden="true">12.2.1.</strong> Views</a></li><li class="chapter-item expanded "><a href="projects/view/tasks.html"><strong aria-hidden="true">12.2.2.</strong> Tasks</a></li></ol></li><li class="chapter-item expanded "><a href="projects/new-project/index.html"><strong aria-hidden="true">12.3.</strong> New Project</a></li><li class="chapter-item expanded "><a href="projects/detail-view.html"><strong aria-hidden="true">12.4.</strong> Project Detail View</a></li><li class="chapter-item expanded "><a href="projects/collaborators.html"><strong aria-hidden="true">12.5.</strong> Collaborators</a></li><li class="chapter-item expanded "><a href="projects/close-project.html"><strong aria-hidden="true">12.6.</strong> Close a Project</a></li></ol></li><li class="chapter-item expanded "><a href="notes/index.html"><strong aria-hidden="true">13.</strong> Notes</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="notes/edit.html"><strong aria-hidden="true">13.1.</strong> Edit Notes</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Appendix</li><li class="chapter-item expanded "><a href="appendix-timekeeping/index.html"><strong aria-hidden="true">14.</strong> Appendix B: Time Keeping</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="appendix-timekeeping/display.html"><strong aria-hidden="true">14.1.</strong> Displaying/Checking Time</a></li><li class="chapter-item expanded "><a href="appendix-timekeeping/project-time.html"><strong aria-hidden="true">14.2.</strong> Project Time</a></li><li class="chapter-item expanded "><a href="appendix-timekeeping/sr-time.html"><strong aria-hidden="true">14.3.</strong> Recording Service Request Time</a></li><li class="chapter-item expanded "><a href="appendix-timekeeping/clocking.html"><strong aria-hidden="true">14.4.</strong> Clocking In and Out for Non-Exempt Employees</a></li><li class="chapter-item expanded "><a href="appendix-timekeeping/enter-time.html"><strong aria-hidden="true">14.5.</strong> How to Enter Leave Time</a></li><li class="chapter-item expanded "><a href="appendix-timekeeping/electronic-timesheets.html"><strong aria-hidden="true">14.6.</strong> Electronic Timesheets</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Workflows</li><li class="chapter-item expanded "><a href="workflows/index.html"><strong aria-hidden="true">15.</strong> Workflows</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="workflows/reset-2fa/index.html"><strong aria-hidden="true">15.1.</strong> I am a DAD Admin and I want to reset a user&#39;s 2FA</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">15.2.</strong> I want to add a meeting with a client</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">15.3.</strong> I want to record time and submit the timesheet</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">15.4.</strong> I want to record time and submit the timesheet</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">15.5.</strong> I want to log in but it&#39;s saying something about 2FA</div></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="misc/developers.html">How was this website made?</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
