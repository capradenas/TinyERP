﻿using App.Common;
using App.Common.Data;
using App.Common.Mapping;

namespace App.Service.Support
{
    public class GetRequestResponse: BaseEntity, IMappedFrom<App.Entity.Support.Request>
    {
        public string Subject { get; set; }
        public string Description { get; set; }
        public string Email { get; set; }
        public ItemStatus Status { get; set; }
    }
}